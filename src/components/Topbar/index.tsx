import Link from 'next/link'
// import { useState } from 'react';
import { useRouter } from 'next/router'
import React from 'react';
// import { useLocation, useRouteMatch } from 'react-router-dom';

import styles from './styles.module.scss'


export function Topbar() {
  const router = useRouter();

  // console.log(router.pathname);

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">
            <a>
              HOME
              <div className={router.pathname === "/" ? styles.selected : styles.notSelected} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <a>
              PROJECT
              <div className={router.pathname.includes("/project") ? styles.selected : styles.notSelected} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>
              ABOUT
              <div className={router.pathname.includes("/about") ? styles.selected : styles.notSelected} />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}