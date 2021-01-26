import React, { useState } from "react"

import styled from "styled-components"
import Pagination from "../components/pagination"
import CMSnovostCardMobLayout from "./cmsnovosticardmoblayout"

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px auto 85px auto;
  width: 83%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`

const NovostiSve = ({ posts }) => {
  const [postovi, setPostovi] = useState(posts)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = postovi.wpgraphql.wp_novosti.edges.slice(
    indexOfFirstPost,
    indexOfLastPost
  )
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <Wrap>
        {currentPosts.map(novost => (
          <CMSnovostCardMobLayout
            key={novost.node.id}
            date={novost.node.date}
            slug={novost.node.slug}
            naslov={novost.node.title}
            tekst={novost.node.wp_gq_novost.tekstNovosti}
            fotoFront={novost.node.wp_gq_novost.istaknutaFotografija.sourceUrl}
            coverFoto={
              novost.node.wp_gq_novost.sirokaFotografijaUPostu.sourceUrl
            }
          />
        ))}
      </Wrap>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postovi.wpgraphql.wp_novosti.edges.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  )
}

export default NovostiSve
