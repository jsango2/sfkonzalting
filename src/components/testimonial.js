import React from "react"
import styled from "styled-components"
import background from "../../content/assets/images/bckg.png"

// import Quote from "../images/quote.svg"
// import Background from "../images/radniciBG.jpg"
import { StaticQuery, graphql } from "gatsby"
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const Wrap = styled.div`
  ${"" /* display: flex; */}
  ${"" /* align-items: center;
  justify-content: center; */}
  position: relative;
  width: 100%;
  height: 444px;
  ${"" /* z-index: 1; */}
  ${"" /* @media only screen and (max-width: 48em) {
    height: 495px;
  } */}
`

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    104.94deg,
    #ac84bc -2.06%,
    #a684bc 0.62%,
    #9382bc 4.8%,
    #747fbd 9.93%,
    #6c7ebd 11.03%,
    #6c84c1 15.14%,
    #6a94cc 22.13%,
    #67aee0 31.08%,
    #63c6f1 37.75%,
    #95d2dc 55.17%,
    #b7dece 72.23%,
    #c3e3c8 81.94%,
    #eba8c1 108.52%,
    #bc9fba 114.7%,
    #9799b5 120.31%,
    #8095b2 124.69%,
    #7794b1 127.27%
  );
  transform: rotate(180deg);
  width: 100%;
  opacity: 0.9;
`

const AutorTestimoniala = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 28.49px;
  margin-top: 50px;
  color: white;
  @media only screen and (max-width: 48em) {
    margin-top: 130px;
  }
  @media only screen and (max-width: 360px) {
    margin-top: 110px;

    font-size: 16px;
    line-height: 19.5px;
  }
`
const ZanimanjeAutora = styled.div`
  text-align: center;
  font-size: 22px;
  font-style: italic;
  font-weight: 300;
  line-height: 28.49px;
  margin: 0 auto;
  color: white;
  width: 60%;
  @media only screen and (max-width: 430px) {
    width: 75%;
    margin: 0 auto;
    font-size: 19px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 19.5px;
  }
`

const Paragraf = styled.div`
  position: relative;
  z-index: 100;
  width: 668px;
  height: 110px;
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 28.49px;
  margin: 170px auto 0 auto;
  color: white;
  @media only screen and (max-width: 48em) {
    font-size: 19px;

    width: 90%;
    margin-top: 150px;
  }
  @media only screen and (max-width: 360px) {
    margin-top: 200px;
    width: 85%;
    font-size: 16px;
    line-height: 19.5px;
  }
`

const Testimonial = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            wp_izjave {
              edges {
                node {
                  wp_gq_izjava {
                    tekstIzjave
                    zanimanjeAutoraIzjave
                  }
                  title
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Wrap>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover ",
            }}
          ></div>
          {/* {console.log(data)} */}
          <Overlay />
          <Carousel
            plugins={[
              "infinite",
              "arrows",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 5000,
                },
              },
            ]}
            animationSpeed={1000}
            draggable={true}
          >
            {data.wpgraphql.wp_izjave.edges.map(testimonial => (
              <div key={testimonial.node.title} className="visibleContent">
                <Paragraf
                  dangerouslySetInnerHTML={{
                    __html: testimonial.node.wp_gq_izjava.tekstIzjave,
                  }}
                />
                <AutorTestimoniala> {testimonial.node.title}</AutorTestimoniala>
                <ZanimanjeAutora>
                  {" "}
                  {testimonial.node.wp_gq_izjava.zanimanjeAutoraIzjave}
                </ZanimanjeAutora>
              </div>
            ))}
          </Carousel>
        </Wrap>
      )}
    ></StaticQuery>
  )
}

export default Testimonial
