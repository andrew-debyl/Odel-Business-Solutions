import Link from "next/link";
import React from "react";

const Footer3 = () => {
  return (
    <>
      <footer className="footer-section style-3">
        <div className="container">
          <div className="footer-top">
            <div className="row g-lg-4 gy-5 justify-content-center">
              <div className="col-lg-4 col-md-8 col-sm-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <img src="/assets/img/logo-odel-dark.png" alt="" />
                    </Link>
                  </div>
                  <div className="content">
                    <p>
                      Welcome to Odel Business Solutions, where innovation meets
                      comprehensive support. We’re your one-stop shop for all
                      business IT needs, from office equipment to IT services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-sm-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Resources</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <Link href="/networking">Networking</Link>
                      </li>
                      <li>
                        <Link href="/products">Products</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Company</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end">
                <div className="footer-widget">
                  <div className="subscribe-area mb-50">
                    <h4>Reach Out For Support</h4>
                    <form className="subscribe-form-wrap">
                      <div className="subscribe-form">
                        <input type="text" placeholder="Enter Email" />
                        <button type="submit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-area">
            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path d="M26.0803 20.4417C25.4047 19.7383 24.5898 19.3622 23.7262 19.3622C22.8695 19.3622 22.0477 19.7313 21.3442 20.4348L19.1433 22.6287C18.9622 22.5312 18.7811 22.4407 18.607 22.3501C18.3563 22.2248 18.1195 22.1063 17.9175 21.981C15.8559 20.6716 13.9823 18.9652 12.1854 16.7573C11.3148 15.6569 10.7297 14.7305 10.3049 13.7903C10.876 13.2679 11.4053 12.7247 11.9207 12.2023C12.1157 12.0073 12.3108 11.8053 12.5058 11.6103C13.9684 10.1477 13.9684 8.25321 12.5058 6.79058L10.6044 4.88917C10.3885 4.67326 10.1656 4.45038 9.95664 4.22751C9.53874 3.79569 9.09996 3.34993 8.64724 2.93204C7.97165 2.26341 7.16372 1.9082 6.31401 1.9082C5.46429 1.9082 4.64244 2.26341 3.94595 2.93204C3.93899 2.939 3.93899 2.939 3.93202 2.94597L1.56396 5.33492C0.672459 6.22643 0.164023 7.31295 0.0525852 8.57359C-0.114572 10.6073 0.484407 12.5018 0.944089 13.7415C2.0724 16.7852 3.7579 19.606 6.27222 22.6287C9.32283 26.2713 12.9933 29.1478 17.1862 31.1746C18.7881 31.9338 20.9263 32.8323 23.3153 32.9855C23.4615 32.9924 23.6148 32.9994 23.7541 32.9994C25.3629 32.9994 26.7141 32.4213 27.7728 31.2721C27.7798 31.2582 27.7937 31.2512 27.8006 31.2373C28.1628 30.7985 28.5807 30.4015 29.0195 29.9767C29.319 29.6911 29.6254 29.3916 29.9249 29.0782C30.6145 28.3608 30.9766 27.525 30.9766 26.6683C30.9766 25.8047 30.6075 24.9759 29.904 24.2794L26.0803 20.4417ZM28.5737 27.7758C28.5668 27.7758 28.5668 27.7827 28.5737 27.7758C28.3021 28.0683 28.0235 28.3329 27.724 28.6255C27.2713 29.0573 26.8116 29.51 26.3798 30.0184C25.6764 30.7707 24.8475 31.1259 23.761 31.1259C23.6565 31.1259 23.5451 31.1259 23.4406 31.1189C21.3721 30.9866 19.4498 30.1786 18.008 29.4891C14.0659 27.5807 10.6044 24.8714 7.72788 21.4377C5.35286 18.5752 3.76486 15.9285 2.71317 13.0868C2.06543 11.3526 1.82863 10.0014 1.9331 8.72682C2.00275 7.91193 2.31617 7.23633 2.89425 6.65825L5.26928 4.28323C5.61056 3.96284 5.97273 3.78872 6.32794 3.78872C6.76673 3.78872 7.12193 4.05339 7.34481 4.27626C7.35177 4.28323 7.35874 4.29019 7.3657 4.29716C7.79056 4.69415 8.19452 5.10508 8.61938 5.54387C8.83529 5.76675 9.05817 5.98962 9.28104 6.21946L11.1825 8.12087C11.9207 8.85915 11.9207 9.54171 11.1825 10.28C10.9805 10.482 10.7855 10.6839 10.5835 10.879C9.99843 11.4779 9.44124 12.0351 8.83529 12.5784C8.82136 12.5923 8.80743 12.5993 8.80047 12.6132C8.20149 13.2122 8.31293 13.7972 8.43829 14.1942C8.44526 14.2151 8.45222 14.236 8.45919 14.2569C8.9537 15.4549 9.65018 16.5832 10.7088 17.9274L10.7158 17.9344C12.6381 20.3024 14.6649 22.1481 16.9006 23.562C17.1862 23.7431 17.4787 23.8894 17.7573 24.0287C18.008 24.154 18.2448 24.2724 18.4468 24.3978C18.4747 24.4117 18.5025 24.4326 18.5304 24.4465C18.7672 24.5649 18.9901 24.6207 19.2199 24.6207C19.798 24.6207 20.1602 24.2585 20.2786 24.1401L22.6606 21.7581C22.8974 21.5213 23.2735 21.2357 23.7123 21.2357C24.1441 21.2357 24.4993 21.5074 24.7152 21.7442C24.7222 21.7511 24.7222 21.7511 24.7291 21.7581L28.5668 25.5958C29.2842 26.3062 29.2842 27.0375 28.5737 27.7758Z" />
                    <path d="M17.834 7.8506C19.6588 8.15705 21.3164 9.0207 22.6398 10.344C23.9631 11.6673 24.8198 13.325 25.1332 15.1498C25.2098 15.6095 25.6068 15.9299 26.0595 15.9299C26.1152 15.9299 26.164 15.9229 26.2197 15.9159C26.7351 15.8323 27.0764 15.3448 26.9928 14.8294C26.6167 12.6215 25.572 10.6087 23.977 9.01373C22.3821 7.41877 20.3692 6.37404 18.1614 5.99794C17.646 5.91436 17.1654 6.25564 17.0748 6.76408C16.9843 7.27251 17.3186 7.76702 17.834 7.8506Z" />
                    <path d="M32.9617 14.557C32.3418 10.9213 30.6285 7.61301 27.9957 4.98029C25.363 2.34757 22.0547 0.634209 18.419 0.0143347C17.9106 -0.0762086 17.43 0.272035 17.3395 0.780471C17.2559 1.29587 17.5972 1.77645 18.1126 1.86699C21.3582 2.41722 24.3183 3.95645 26.6724 6.30362C29.0265 8.65774 30.5588 11.6178 31.109 14.8634C31.1857 15.3231 31.5827 15.6435 32.0354 15.6435C32.0911 15.6435 32.1398 15.6365 32.1956 15.6296C32.704 15.553 33.0522 15.0654 32.9617 14.557Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Phone</span>
                <h6>
                  <a href="tel:+14166276564">+1 416-627-6564</a>
                </h6>
              </div>
            </div>
            <div className="hotline-area">
              <div className="icon">
                <img src="/assets/icons/email.png" alt=""></img>
              </div>
              <div className="content">
                <span>Email</span>
                <h6>
                  <a href="mailto:sales@odelbusinesssolutions.com">
                    sales@odelbusinesssolutions.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright-area">
              <p>Copyright © Odel Business Solutions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer3;
