import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/studio/1.jpeg";
import studio2 from "assets/img/studio/2.jpeg";
import studio3 from "assets/img/studio/3.jpeg";
import studio4 from "assets/img/studio/4.jpeg";
import studio5 from "assets/img/studio/5.jpeg";
import studio6 from "assets/img/studio/6.jpeg";
import studio7 from "assets/img/studio/7.jpeg";
import studio8 from "assets/img/studio/8.jpeg";
import studio9 from "assets/img/studio/9.jpeg";
import studio10 from "assets/img/studio/10.jpeg";
import studio11 from "assets/img/studio/11.jpeg";

import work1 from "assets/img/work/1.jpeg";
import work2 from "assets/img/work/2.jpeg";
import work3 from "assets/img/work/3.jpeg";
import work4 from "assets/img/work/4.jpeg";
import work5 from "assets/img/work/5.jpeg";
import work6 from "assets/img/work/6.jpeg";
import work7 from "assets/img/work/7.jpeg";
import work8 from "assets/img/work/8.jpeg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <div>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center" id="about">
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Renu Kumar</h3>
                    <h6>PHOTOGRAPHER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center" id="gallery">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </Card>
                            <Card>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </Card>

                            <Card>
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={studio6}
                                className={navImageClasses}
                              />
                            </Card>
                            <Card>
                              <img
                                alt="..."
                                src={studio7}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={studio8}
                                className={navImageClasses}
                              />
                            </Card>
                            <Card>
                              <img
                                alt="..."
                                src={studio9}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={studio10}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={studio11}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                            </Card>
                            <Card>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </Card>
                            <Card>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </Card>
                            <Card>
                              <img
                                alt="..."
                                src={work6}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card>
                              <img
                                alt="..."
                                src={work7}
                                className={navImageClasses}
                              />
                            </Card>
                            <Card>
                              <img
                                alt="..."
                                src={work8}
                                className={navImageClasses}
                              />
                            </Card>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
