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

  // console.log(noTime)
  return (
    <Link to="">
      <CardWrap>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            backgroundImage: `url(${props.coverFoto})`,
            top: "0",
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "2",
          }}
        ></div>

        <div
          style={{
            fontSize: "14px",
            lineHeight: "18px",
            marginTop: "19px",
            marginBottom: "10px",
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
            style={{ fontWeight: "700", fontSize: "14px", marginRight: "10px" }}
          >
            Saznaj više ➞
          </div>
        </div>
      </CardWrap>
    </Link>
  )
}

export default CMSnovostCard
