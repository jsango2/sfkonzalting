import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import cardphoto from "../../content/assets/images/cmscard.png"

const CardWrap = styled.div`
  ${
    "" /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  }
  max-width: 280px;
  width: 245px;
  min-width: 230px;
  height: 316px;
  margin-left: 8px;
  margin-right: 8px;
  animation: fade-in 1s ease-out both;
  ${"" /* margin-left: 10px;
  margin-right: 10px; */}
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover .coverPhoto2 {
    transform: scale(1.03);
  }
  @media only screen and (max-width: 633px) {
    max-width: 100%;
    width: 100%;
  }
`

const CMSnovostCard = props => {
  const [datum, setDatum] = useState("-")
  useEffect(() => {
    let datumPosta = props.date
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear()

      if (month.length < 2) month = "0" + month
      if (day.length < 2) day = "0" + day

      return [day, month, year].join(".")
    }
    setDatum(formatDate(datumPosta))
  }, [props.date])

  return (
    <Link style={{ textDecoration: "none" }} to={`/novosti/${props.slug}`}>
      <CardWrap className="coverPhoto">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            overflow: "hidden",
          }}
        >
          <div
            className="coverPhoto2"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${props.coverFoto})`,
              top: "0",
              backgroundPosition: "center",
              backgroundSize: "cover ",
              zIndex: "2",
            }}
          ></div>
        </div>

        <div
          style={{
            fontSize: "14px",
            lineHeight: "18px",
            marginTop: "14px",
            marginBottom: "10px",
            color: "black",
          }}
        >
          {props.naslov}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "#A0A0A0", fontSize: "12px" }}>{datum}</div>
          <div
            // className="saznajVise"
            style={{
              fontWeight: "700",
              fontSize: "14px",
              marginRight: "10px",
              color: "black",
            }}
          >
            Saznaj više ➞
          </div>
        </div>
      </CardWrap>
    </Link>
  )
}

export default CMSnovostCard
