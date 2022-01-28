import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";
import Theme from "../Theme";

const items = [
  {
    title: "NFT Swap.",
    menu: [
      {
        title: "Discover",
        url: "/search01",
      },
      {
        title: "Connect wallet",
        url: "/connect-wallet",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title: "FAQ",
        url: "/faq",
      },
      {
        title: "Create item",
        url: "/upload-variants",
      },
    ],
  },
];

const Footers = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to='/'>
              <Image
                className={styles.pic}
                src='/images/logo-dark.png'
                srcDark='/images/logo-light.png'
                alt='Fitness Pro'
              />
            </Link>
            <div className={styles.info}>
              Swap Your NFTs Securely and Easily
            </div>
            <div className={styles.version}>
              <div className={styles.details}>Dark theme</div>
              <Theme className='theme-big' />
            </div>
          </div>
          <div className={styles.col}>
            {items.map((x, index) => (
              <Group className={styles.group} item={x} key={index} />
            ))}
          </div>
          <div className={styles.col}>
            <div className={styles.category}>Join Our Beta List</div>
            <div className={styles.text}>
              We are currently in Beta phase, so please use NFT Trader at your
              own discretion.
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={() => handleSubmit()}
              placeholder='Enter your email'
              type='email'
              name='email'
            />
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            Copyright © 2021 MHW. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
