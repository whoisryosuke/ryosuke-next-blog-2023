import React from "react";
import { useAppStore } from "store/app";
import PageWrapper from "@components/dom/PageWrapper/PageWrapper";
import PortfolioApp from "@components/dom/PortfolioApp/PortfolioApp";
import { portfolio } from "content/portfolio/portfolio";

export default function WorkPage() {
  const { customizations, setUserTheme } = useAppStore();

  let index = 0;
  // Go through each year and loop through the items inside
  const work = Object.entries(portfolio).reduce((prev, [year, items]) => {
    // Sort the posts by date
    const sortedItems = items.sort((a, b) => {
      // Newest first (so b - a)
      return Date.parse(b.date) - Date.parse(a.date);
    });

    // Loop through each item and add the index
    const indexedItems = sortedItems.map((work) => {
      index += 1;
      return {
        ...work,
        id: index,
      };
    });

    prev = {
      ...prev,
      [year]: indexedItems,
    };

    return prev;
  }, {});

  return (
    <PageWrapper>
      <PortfolioApp work={work} />
    </PageWrapper>
  );
}
