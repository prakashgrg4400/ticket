// useEffect(() => {
//         const loadImage = (image) => {
//             return new Promise((resolve, reject) => {
//                 let myImage = new Image();
//                 myImage.src = image.img;

//                 myImage.onload = () => {
//                     setTimeout(() => {
//                         // console.log("Image resolved successfully");
//                         resolve("Image details => success");
//                     }, 2000);
//                 };

//                 myImage.onerror = (err) => {
//                     // console.log("Image Failed to Load");
//                     reject("Unable to load image => ", err);
//                 };
//             });
//         };

//         Promise.all(
//             trendingEvents.map((image) => {
//                 return loadImage(image);
//             })
//         )
//             .then((result) => {
//                 console.log(result);
//                 setImagesLoaded(true);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);
