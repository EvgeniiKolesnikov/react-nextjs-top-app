import styles from './Menu.module.scss';
import cn from 'classnames';
import { useContext, KeyboardEvent } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20, 
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: { opacity: 1, height: 29 },
    hidden: { opacity: 0, height: 0 },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Enter' || key.code === 'Space') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <div>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory
                })}>
                  {m.icon}
                  <span>
                    {m.name}
                  </span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </div>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div 
                tabIndex={0} 
                className={styles.secondLevel} 
                onClick={() => openSecondLevel(m._id.secondCategory)}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <motion.div 
                className={cn(styles.secondLevelBlock)}
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map((p, i) => (
        <motion.div key={i} variants={variantsChildren}>
          <Link href={`/${route}/${p.alias}`}>
            <a tabIndex={isOpened ? 0 : -1} className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
            })}>
              {p.category}
            </a>
          </Link>
        </motion.div>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
      {/* <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul> */}
    </div>
  );
};
