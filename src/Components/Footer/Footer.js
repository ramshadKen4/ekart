import React from 'react'

function Footer() {
    return (
        <div class="container my-5">
            <footer
                class="text-center text-lg-start  "
                style={{ backgroundColor: "" }}
            >
                <div class="container p-4 pb-0">
                    <section class="">
                        <div class="row">
                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore
                                </p>
                                <div class="d-flex col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <a
                                        class="btn btn-outline-light btn-floating m-1"
                                        role="button"
                                    ><i class="fab fa-facebook-f"></i
                                    ></a>

                                    <a
                                        class="btn btn-outline-light btn-floating m-1"
                                        role="button"
                                    ><i class="fab fa-twitter"></i
                                    ></a>

                                    <a
                                        class="btn btn-outline-light btn-floating m-1  "
                                        role="button"
                                    ><i class="fab fa-google"></i
                                    ></a>

                                    <a
                                        class="btn btn-outline-light btn-floating m-1  "
                                        role="button"
                                    ><i class="fab fa-instagram"></i
                                    ></a>
                                </div>
                            </div>

                            <hr class="w-100 clearfix d-md-none" />

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Quick links</h6>
                                <p>
                                    <a class="">Products</a>
                                </p>
                                <p>
                                    <a class="">Classifieds</a>
                                </p>
                                <p>
                                    <a class="">Contact us</a>
                                </p>
                                <p>
                                    <a class="">Login</a>
                                </p>
                                <p>
                                    <a class="">Sign Up</a>
                                </p>
                            </div>

                            <hr class="w-100 clearfix d-md-none" />

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">
                                    customer area
                                </h6>
                                <p>
                                    <a class=" ">My Account</a>
                                </p>
                                <p>
                                    <a class=" ">Order</a>
                                </p>
                                <p>
                                    <a class=" ">Tracking List</a>
                                </p>
                                <p>
                                    <a class=" ">Terms</a>
                                </p>
                            </div>

                            <hr class="w-100 clearfix d-md-none" />

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </section>

                    <hr class="my-3" />
                </div>
            </footer>
        </div>
    )
}

export default Footer