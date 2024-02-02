import React, { useState, useEffect } from 'react';
import axios from "axios";

const DogCeoContent = () => {
  const [data, setData] = useState();
  const [urlImg, setUrlImg] = useState();

  console.log("data", data);

  const getByBreed = (breed, subBreed) => {
    let cat = subBreed ? `${breed}/${subBreed}` : breed;
    const newUrl = `https://dog.ceo/api/breed/${cat}/images/random`;
    fetchData(newUrl);
  };

  useEffect(() => {
    console.log("ComponentUpdate by dependencies [ ...dependencies ]");
  }, [data]);

  const fetchData = (url) => {
    axios.get(url)
      .then((response) => {
        setUrlImg(response.data.message);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  

  useEffect(() => {
    console.log("ComponentDidMount");
    axios.get("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        setData(response.data.message);
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });

    fetchData("https://dog.ceo/api/breeds/image/random")
  }, []);

  useEffect(() => {
    console.log("Component Update");
  });


  return (
    <div>
      <h3>Dog Ceo breeds list</h3>
      <div className="d-flex">
        <ul>
          {
            data && Object.keys(data).map((el) => (
              <li key={el}>
                <button onClick={() => getByBreed(el)}>{el}</button>
                {
                  data[el].length > 0 && (
                    <ul>
                      {
                        data[el].map((str) => (
                          <li key={str}>
                          <button onClick={()=>getByBreed(el,str)}>{str}</button>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
              </li>
            ))
          }
        </ul>
        <div>
          <img style={{ height: '500px', width: '100%', objectFit: 'cover', display: 'flex' }} src={urlImg} alt='Test' />
        </div>
      </div>
    </div>
  )
}

export default DogCeoContent;
