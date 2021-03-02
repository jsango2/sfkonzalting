import React, { useState } from "react"

import styled from "styled-components"
import Pagination from "../components/pagination"
import CMSizdvojeniCardMobLayout from "./cmsizdvojenicardmoblayout"

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px auto 55px auto;
  width: 83%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`

const ProjektiSve = ({ posts }) => {
  const [postovi, setPostovi] = useState(posts)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = postovi.wpgraphql.wp_projekti.edges.slice(
    indexOfFirstPost,
    indexOfLastPost
  )
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <Wrap>
        {currentPosts.map(projekt => (
          <CMSizdvojeniCardMobLayout
            key={projekt.node.id}
            date={projekt.node.date}
            slug={projekt.node.slug}
            naslov={projekt.node.title}
            uvodUprojekt={projekt.node.wp_gr_projekt.uvodUProjekt}
            ulogaUprojektu={
              projekt.node.wp_gr_projekt.ulogaSfKonzaltingaUProjektu
            }
            fotoFront={projekt.node.wp_gr_projekt.istaknutaSlika.sourceUrl}
            coverFoto={
              projekt.node.wp_gr_projekt.sirokaFotografijaUPostu.sourceUrl
            }
          />
        ))}
      </Wrap>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postovi.wpgraphql.wp_projekti.edges.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  )
}

export default ProjektiSve
