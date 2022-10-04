import React from 'react'
import { packageCardData } from '../../utils/packageCardData';
import Card from './Card';

const PackageCards = () => {
  return (
    <>
    <link
      rel="stylesheet"
      href="https://cdn.tailgrids.com/tailgrids-fallback.css"
    />
    <section className="pt-10">
      <div className="container shadow-xl ">
        <div className="flex flex-wrap justify-evenly -mx-4">
          {packageCardData.map((items) => {
            return <Card key={items.id} {...items} />;
          })}
        </div>
      </div>
    </section>
  </>
  )
}

export default PackageCards