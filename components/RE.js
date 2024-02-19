import React from 'react'

const RE = ({re}) => {
  return (
    <a href="#" className="group" key={re.id}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          {/* <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"> */}
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{re.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{re.realEstateDetail.district}</p>
        <p className="mt-1 text-lg font-medium text-gray-900">{re.price}</p>
      </a>
  )
}

export default RE