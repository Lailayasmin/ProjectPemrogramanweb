import React from "react";
import List from "./isiProduk/list";

export default function Produk() {
  return (
    <div>
      <div className="col-12 " id="Produk">
        <div className="heading text-center mt-5 px-5">
          <h1 className=" fw-bold">Yuk Beli Sekarang!</h1>
        </div>
      </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
          <List
            gambarProduk="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
            namaProduk="Jam Tangan Rolex"
            hargaProduk="1000"
          />
          <List
            gambarProduk="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
            namaProduk="Jam Tangan Rolex"
            hargaProduk="1000"
          />
          <List
            gambarProduk="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
            namaProduk="Jam Tangan Rolex"
            hargaProduk="1000"
          />
          <List
            gambarProduk="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
            namaProduk="yttyyt"
            hargaProduk="1000"
          />
          <List
            gambarProduk="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
            namaProduk="yttyyt"
            hargaProduk="1000"
          />
            <List
            gambarProduk="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
            namaProduk="yttyyt"
            hargaProduk="1000"
          />
          <List
            gambarProduk="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
            namaProduk="yttyyt"
            hargaProduk="1000"
          />
          <List
            gambarProduk="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
            namaProduk="yttyyt"
            hargaProduk="1000"
          />

            
          </div>
        </div>
        {/* <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      Beli
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
