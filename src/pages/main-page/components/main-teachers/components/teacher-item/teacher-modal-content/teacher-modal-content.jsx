import { useEffect, useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Select } from '@/components/select';
import { useWindowSize } from '@/hooks/useWindowSize';

import { createTabOptions } from './helpers/createTabOptions';
import { SocialLinks } from './social-links';
import { TabButtons } from './tab-buttons';

import styles from './teacher-modal-content.module.scss';

export const TeacherModalContent = ({
  teacher: { id, name, description, imageSrc, tabs, links },
}) => {
  const [options, setOptions] = useState([]);
  const [activeTab, setActiveTab] = useState({});
  const [activeTabContent, setActiveTabContent] = useState(tabs[0]?.data || []);

  const { isMobile } = useWindowSize();

  useEffect(() => {
    const newOptions = createTabOptions(tabs);
    setOptions(newOptions);
  }, [tabs]);

  useEffect(() => {
    if (options.length > 0) {
      setActiveTab(options[0]);
    }
  }, [options]);

  useEffect(() => {
    if (!activeTab?.value) return;

    const newTabContent = tabs.find((tab) => tab.name === activeTab.value);
    if (newTabContent) {
      setActiveTabContent(newTabContent.data);
    }
  }, [activeTab, tabs]);

  if (!id) {
    return <div>Учитель не найден</div>;
  }

  const handleTabChange = (options) => {
    setActiveTab(options);
  };

  return (
    <div className={styles.teacherModalContent}>
      <div className={styles.contentTop}>
        <img className={styles.contentTopImg} src={teachersImages[imageSrc]} alt={name} />
        <div className={styles.contentTopInfo}>
          <h3 className={styles.contentTopInfoTitle}>{name}</h3>
          <p className={styles.contentTopInfoDesc}>{description}</p>
          <SocialLinks links={links} />
        </div>
      </div>

      <div className={styles.contentBottom}>
        {isMobile ? (
          <Select options={options} value={activeTab} onChange={handleTabChange} />
        ) : (
          <TabButtons options={options} activeTab={activeTab} handleTabChange={handleTabChange} />
        )}

        <div className={styles.contentBottomTabsContent}>
          {activeTabContent.map((content, index) => {
            return (
              <div key={index} className={styles.tabContent}>
                {Boolean(content.title) && (
                  <h3 className={styles.tabContentTitle}>{content.title}</h3>
                )}
                {content.text?.map((textParagraph, indexParagraph) => (
                  <p key={indexParagraph} className={styles.tabContentInfo}>
                    {textParagraph}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
