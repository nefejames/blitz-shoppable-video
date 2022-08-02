const shoppable = {
  products: [
    {
      productId: 1,
      productName: "A Dog",
      publicId:
        "https://res.cloudinary.com/nefejames/image/upload/v1632500955/Hackmamba/Images/pet9.jpg",
      onClick: {
        action: "goto",
        pause: true,
        args: {
          url: "/product/1",
        },
      },
    },
  ],
}

export default shoppable
