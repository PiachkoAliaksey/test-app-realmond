"use client"

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import SkeletonItem from "../SkeletonItem/SkeletonItem";
import { TListSearchedData } from "@/lib/types";
import Button from "../common/Button/Button";
import { FaChevronUp } from "react-icons/fa6";


const ListSearchedData = ({ resultsData, loading, error }: TListSearchedData) => {
  const refList = useRef<HTMLDivElement>(null);
  const [topBlock, setTopBlock] = useState<number | null>(null);
  const [isShowGoTop, setIsShowGoTop] = useState(false);

  const handlerScrollList = useCallback(() => {
    if (!window) return;

    if (topBlock) {
      if (window.scrollY > topBlock + 100) {
        console.log('1')
        setIsShowGoTop(true);
      } else {
        console.log('2')
        setIsShowGoTop(false);
      }
    }
  },[topBlock,isShowGoTop])

  const handlerClickTopButton = () => {
    if (!window) return;

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useLayoutEffect(() => {
    if (refList.current) {
      setTopBlock(refList.current.getBoundingClientRect().top)
    }
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('scroll', handlerScrollList);
    return () => {
      window.removeEventListener('scroll', handlerScrollList);
    }
  }, [handlerScrollList])

  return (
    <>
      {error ? <div className="w-full h-full rounded-lg text-white flex items-center justify-center bg-red-400 text-4xl">Something goes wrong...  Please try again later.</div> : (
        <div ref={refList} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? [...Array(10).keys()].map((item) => (
            <SkeletonItem key={item} />
          )) : resultsData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              artistName={item.artistName}
              artworkUrl60={item.artworkUrl60}
              collectionName={item.collectionName}
              country={item.country}
              primaryGenreName={item.primaryGenreName}
            />
          ))
          }

          {isShowGoTop && <Button handlerClick={handlerClickTopButton} title={<FaChevronUp />} type="button" addClassNames="fixed left-[90%] bottom-[10%] flex items-center justify-center shadow-2xl bg-red-400 backdrop-blur-md w-14 h-14 rounded-full b-2 transition hover:scale-110 " />}
        </div>
      )}
    </>
  )
}

export default ListSearchedData