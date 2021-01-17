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
  width: 245px;
  height: 316px;
  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}
  animation: fade-in 1s ease-out both;
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
  &:hover .coverPhoto {
    transform: scale(1.02);
  }
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Naslov = styled.div`
  font-size: 32px;
  width: 100%;
  height: auto;
  margin-left: 129px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
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
      <CardWrap>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            overflow: "hidden",
          }}
        >
          <div
            className="coverPhoto"
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
            marginTop: "19px",
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
