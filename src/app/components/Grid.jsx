// "use client";


import { gridItems } from "../data/index";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrids";


const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-30">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;