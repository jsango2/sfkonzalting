import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const CardWrap = styled.div`
  width: 245px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 20px;
  min-width: 230px;
  height: 316px;
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
  @media only screen and (max-width: 538px) {
    margin-left: 8px;
    margin-right: 8px;
    min-width: 90vw;
    padding-bottom: 10px;
    height: auto;
    margin-top: 10px;
    background-color: rgb(245, 245, 245);
  }
`

const CMSnovostCardMobLayout = props => {
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
        <div className="mobileNovostiCard">
          <div
            style={{
              fontSize: "14px",
              lineHeight: "18px",
              marginTop: "19px",
              marginBottom: "10px",
              color: "black",
              width: "90%",
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
              className="saznajVise"
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
        </div>
      </CardWrap>
    </Link>
  )
}

export default CMSnovostCardMobLayout
