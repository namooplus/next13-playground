"use client";

import styles from "@/app/fragment/layout.module.css";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const FragmentLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const fragments = ["a", "b"];

  const moveTo = (target: string) => {
    router.replace(`/fragment/${target}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigationContainer}>
        {fragments.map((fragment) => (
          <button
            key={fragment}
            className={styles.navigation}
            onClick={() => moveTo(fragment)}
          >
            {fragment.toUpperCase()}
          </button>
        ))}
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default FragmentLayout;
