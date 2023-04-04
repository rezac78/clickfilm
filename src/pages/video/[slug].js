import { useState, useEffect, useRef } from "react";
import { GraphQLClient, gql } from "graphql-request";
import Meta from "@/components/MetaTitle/Meta";
import Image from "next/image";
import Link from "next/link";
export const getServerSideProps = async (pageContext) => {
  const url =
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfze5ufq6z0t01ui0x1zan9t/master";
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODA1MTMwODQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xmemU1dWZxNnowdDAxdWkweDF6YW45dC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWUwNzMwMGItMDJiYy00M2Y3LWExYzEtOTA3ZDZiNWMzMDRkIiwianRpIjoiY2xnMG0zbjZrN240eDAxdWkzYWRvZ29haiJ9.WS1Sb39th6FrsqyjOAjjHsvm_M8OqQmcork0jd-prcH-eU-N_96dBvhiIWKA74ikk-4u4UM1BRcyUGBVvjDKdQH1499eJH2Qmqg5GWd9YdI_ysC9KSJkX4-YlyHPwdIttH9zMKnKGVcPcyve7cZGRB8CQ-OIPr31mr0n8tZ-bHoIykDbCh4hZtvIGKYztE-JfWzYevDchC-NoR461_Toa-YggbUVyJ4S3Rg7P-fzl7HeD7ke3OVhbfNkOKgMjFczySud7O0BVrIKYr5_z0DEMtn2XUoxHqMBN41zjvZYajvgP_w_FWpagzrpFAt8xesCwMWiy3EQedwjR31nU9LKu9Nq6RSKPwRH4IGFiKohhBuDkDA26GnNVO2v5gftGovOiK2fqU76jmB0jm4mRMiQ2za8bRxGv_8I6eoT6mxbAm0bwvH2C1YVfEcYAq7uh65MLv80Gc0KYCUsgbT7WcXv69N2Nbrod_r-7_1-WBFUE49pYXWPwrzBdnNXKa-V6qwxFTBXRI6nDzxTA1LjK3i0HnQ_3NDHXxLVRTNYDJ---NdKhUlIpyuSr9oW6LROTO-4gYs5JcDbkp_fPaX8b654hVXLw1XV6tbIVS9_oHZtRQSFc5vknkCZYCcAc6vjvm4hqFooQOBplNsjIaEy_95IqyeYlMP3JfU7YSUv9qshymE",
    },
  });

  const pageSlug = pageContext.query.slug;
  const query1 = gql`
    query ($pageSlug: String!) {
      fIlms(where: { slug: $pageSlug }) {
        createdAt
        id
        tiTleFilm
        description
        slug
        tags
        director
        actors
        mp4 {
          url
        }
        cover {
          url
        }
        coverPhone {
          url
        }
      }
    }
  `;
  const variables = {
    pageSlug,
  };
  const data = await graphQLClient.request(query1, variables);
  const fIlms = data.fIlms;
  return {
    props: {
      fIlms,
    },
  };
};

export default function Video({ fIlms }) {
  const [isActive, setIsActive] = useState(false);
  const vidRef = useRef(null);
  const handleClick = () => {
    setIsActive(!isActive);
    var Video = vidRef.current;
    Video.pause();
    Video.currentTime = 0;
  };
  const [mobailSize, setMobailSize] = useState();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobailSize(window.innerWidth);
    });
  }, []);
  return (
    <>
      <Meta NameTitle="Download" linkTitle="Home" />
      <div style={{ background: "#111111" }}>
        {fIlms.map((e) => {
          const myLoader = ({ src }) => {
            return e.cover.url;
          };
          const myLoaderPhone = ({ src }) => {
            return e.coverPhone.url;
          };
          return (
            <div className="" key={e.id}>
              <div className="video">
                <div className="clipDown">
                  <Image
                    loader={mobailSize < 650 ? myLoaderPhone : myLoader}
                    src={mobailSize < 650 ? e.cover.url : e.coverPhone.url}
                    width={1400}
                    height={450}
                    alt="poster-Film"
                  />
                </div>
                <div className="sphere">
                  <video loop muted autoPlay>
                    <source type="video/webm" src={e.mp4.url} />
                  </video>
                </div>
              </div>
              <div className="classContainerDown">
                <main>
                  <div className="container">
                    <div className="main">
                      <div className="Main-Download">
                        <div className="part1">
                          <div className="name-part">
                            <span>دانلود فیلم {e.tiTleFilm}</span>
                          </div>
                          <div className="collaction-part">
                            <span>{e.tags.join(" |")}</span>
                          </div>
                        </div>
                        <div className="part2">
                          <div className="country-part ">
                            <i className="fas fa-globe">
                              <span>محصول کشور : امریکا</span>
                            </i>
                            <i className="far fa-clock">
                              <span>مدت زمان:92 دقیقه</span>
                            </i>
                          </div>
                          <div className="IMDB-part">
                            <i className="fas fa-star">
                              <big>5.9</big>
                              <small>/10</small>
                              <span>IMDB</span>
                            </i>
                          </div>
                        </div>
                        <div className="part2">
                          <div className="pay-part ">
                            <i className="fas fa-trophy">
                              <span>فروش کلی : ثبت نشده</span>
                            </i>
                          </div>
                          <div className="min-part">
                            <i className="far fa-clipboard">
                              <span>میزان آراء: 2.112 نفر</span>
                            </i>
                          </div>
                        </div>
                        <div className="part3">
                          <div className="max-part text-right">
                            <span>
                              کارگردان : <big>{e.director}</big>
                            </span>
                            <span>
                              بازیگران : <big>{e.actors.join(" ,")}</big>
                            </span>
                          </div>
                        </div>
                        <div className="part3">
                          <div className="matn-part text-center">
                            <span>خلاصه داستان :</span>
                            <p>{e.description}</p>
                          </div>
                        </div>

                        <div className="part2">
                          <div className="number-part">
                            <span>
                              نمره منتقدین <small>20</small> <big>از 100</big>
                            </span>
                          </div>
                          <div className="BannerTrailer">
                            <Link href="#" onClick={handleClick}>
                              تماشا
                            </Link>
                            <div
                              className={`trailer ${isActive ? "active" : ""}`}
                            >
                              <video ref={vidRef} controls={true}>
                                <source type="video/webm" src={e.mp4.url} />
                              </video>
                              <Image
                                width={100}
                                height={10}
                                src="/img/close.png"
                                className="close"
                                onClick={handleClick}
                                alt="close"
                              />
                            </div>
                          </div>
                          <div className="age-part ">
                            <span>
                              رده سنی <big>PG-13</big>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
