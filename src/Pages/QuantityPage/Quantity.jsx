import {
  ArrowLeftOutlined,
  CloseOutlined,
  RightOutlined,
} from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import FrontImageSmall from "../../assets/FrontImageSmall";
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import affirm from "../../assets/paypal.png";
import piggybank from "../../assets/piggybank.png";
import { StatesContext } from "../../Context/StatesContext";
import { Modal, Progress } from "antd";
import vedio from "../../assets/sendMail.gif";
import { useNavigate } from "react-router-dom";
// import emailjs from '@emailjs/browser';

const colorNames = [
  { name: "Black", hex: "#000000" },
  { name: "Dark blue", hex: "#536AA2" },
  { name: "Red", hex: "#ff0000" },
  { name: "Orange", hex: "#E25822" },
  { name: "Yellow", hex: "#F6E25B" },
  { name: "Green", hex: "#00FF00" },
  { name: "Purple", hex: "#800080" },
  { name: "Light purple", hex: "#9482B2" },
  { name: "Pink", hex: "#F05894" },
  { name: "Grey", hex: "#95989D" },
  { name: "Light blue", hex: "#5DA2CF" },
  { name: "White", hex: "#ffffff" },
];
const getNetTotal = (quantities) => {
  return quantities.reduce((total, colorQuantities) => {
    const colorTotal = Object.values(colorQuantities).reduce(
      (sum, qty) => sum + qty,
      0
    );
    return total + colorTotal;
  }, 0);
};

const Quantity = ({
  setSelectedColors,
  pricingActive,
  selectedColors,
  setSlide,
  setPricingActive,
  priceView,
  setPriceView,
}) => {
  const [openStates, setOpenStates] = useState(selectedColors.map(() => false));
  const { TextArray } = useContext(StatesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [designName, setDesignName] = useState("");
  const [progressVisible, setProgressVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ designName: "", email: "" });
  const [progress, setProgress] = useState(0);
  const [navigateCart, setNavigateCart] = useState(false);
  const [quantities, setQuantities] = useState(
    selectedColors.map(() => ({
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      "2XL": 0,
      "3XL": 0,
      "4XL": 0,
      "5XL": 0,
      YSX: 0,
      YS: 0,
      YM: 0,
      YL: 0,
      YXL: 0,
    }))
  );

  const getColorName = (hex) => {
    const color = colorNames.find(
      (color) => color.hex.toLowerCase() === hex.toLowerCase()
    );
    return color ? color.name : "Unknown color";
  };

  const toggleOpen = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  useEffect(() => {
    const netTotal = getNetTotal(quantities);
    setPricingActive(netTotal > 0);
  }, [quantities]);

  const handleQuantityChange = (index, size, value) => {
    const newQuantities = [...quantities];
    const validatedValue = Math.max(0, Number(value));
    newQuantities[index][size] = validatedValue;
    setQuantities(newQuantities);
  };

  const netTotal = getNetTotal(quantities);

  const getTotalItems = (index) => {
    const colorQuantities = quantities[index];
    const totalItems = Object.values(colorQuantities).reduce(
      (sum, qty) => sum + qty,
      0
    );
    if (totalItems === 0) {
      setPricingActive(false);
    } else {
      setPricingActive(true);
    }
    return totalItems;
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDesignNameChange = (e) => {
    setDesignName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateDesignName = (name) => {
    const nameRegex = /^[a-zA-Z0-9-\s]{1,25}$/;
    if (!nameRegex.test(name)) {
      return "Design name must be 25 characters max and only include letters, numbers, and dashes.";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const designNameError = validateDesignName(designName);
    const emailError = validateEmail(email);

    if (designNameError || emailError) {
      setErrors({ designName: designNameError, email: emailError });
    } else {
      setProgressVisible(true);
      // console.log("Form submitted:", { designName, email });

      if(window.Email) {

        const bodyCode = `
        <div> 
          <h2> Your design has been saved! </h2>
          <h2> Design Name: ${designName} </h2>
          <h4> Email: ${email} </h4>
          <h5 style="font-size: 18px;"> Your design is looking great! </h5>
          <a href="https://topsupplycustomsllc.com" 
            style="padding: 10px 20px; border-radius: 8px; background: #000; 
              text-decoration: none; color: #fff; margin-top: 10px;"> 
            Buy Your Design 
          </a>
        </div>
      `;
        const config = {
          Host : "smtp.elasticemail.com",
          Username : "salmankhan1397491@gmail.com",
          Password : "7AE934152D1B2DCABAEBBB18AF31E22B1D60",
          Port: 2525,
          To : 'salmankhan1397491@gmail.com',
          From : "salmankhan1397491@gmail.com",
          Subject : "Top Supply Customs",
          Body : bodyCode,
        }
        window.Email.send(config).then(
        ).catch((error) =>{
          console.error(error);
        })
      }

      // const templateParams = {
      //   from_name: designName,
      //   from_email: email,
      //   to_name: designName,
      //   to_email: email,
      //   cc_email: email,
      //   message: 'message here'
      // };

      // emailjs
      //   .send('service_gxsiegt', 'template_b90o79b', templateParams, {
      //     publicKey: 'rcOEErE8QtSVJt0SK',
      //   })
      //   .then(
      //     (response) => {
      //       console.log('SUCCESS!', response.status, response.text);
      //     },
      //     (err) => {
      //       console.log('FAILED...', err);
      //     },
      //   );

      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;

        setProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 500);
    }
  };

  useEffect(() => {
    if (progress === 100) {
      setProgressVisible(false);
      setNavigateCart(true);
    }
  }, [progress]);

  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (navigateCart) {
      timer = setTimeout(() => {
        navigate(
          '/checkout',
          {
            state: {
              designName: designName
            }
          }
        ); 
      }, 3000); 
    }

    return () => clearTimeout(timer);
  }, [navigateCart, navigate]);


  return (
    <div className="bg-[#fbfbfb] rush-container py-6 px-4 h-[85vh] overflow-y-auto">
      {priceView ? (
        <div>
          <p className="font-poppins text-[10.5px] text-[#27a6ff] font-[600] ">
            REVIEW YOUR ORDER
          </p>
          <div className="flex gap-[10px] justify-between my-[10px]">
            <h2 className="flex gap-[10px] font-poppins font-[600] lg:text-[22px] text-[16px] text-[#424447] items-center">
              <FaArrowLeft
                className="text-[22px] cursor-pointer"
                onClick={() => setSlide(false)}
              />
              Your Products & Pricing
            </h2>
            <CloseOutlined
              className="text-[22px]"
              onClick={() => setSlide(false)}
            />
          </div>
          <p className="text-[.85em] text-[#8d9095] font-poppins">
            Your order includes a professional design review and satisfaction
            guarantee.
          </p>
          <div className="border-[1px] border-[#e4e5e9] w-[100%] my-[20px]"></div>

          {selectedColors.map((color, index) => (
            <div className="" key={index}>
              <div className="flex w-[100%] border-b-[#dadada] border-b-[1px] pb-[20px] items-center gap-[20px]">
                <div className="w-[15%]">
                  <FrontImageSmall
                    color={{ useMask: true, maskColor: color }}
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="font-poppins font-[600] lg:text-[14px] text-[12px]">
                    RT2000 RushOrderTees Classic Tee
                  </h2>
                  <p className="font-poppins font-[400] text-[12px]">
                    {getColorName(color)}
                  </p>
                </div>
                <div className="w-[20%] font-poppins font-[400] text-[12px] flex flex-col items-end gap-[4px]">
                  {getTotalItems(index)} items
                  <div className="flex gap-[5px] items-center">
                    <strong className="text-[15px]">
                      {getTotalItems(index) === 1
                        ? "$35"
                        : getTotalItems(index) > 10
                        ? "$25"
                        : getTotalItems(index) <= 5
                        ? "$30"
                        : "35$"}
                    </strong>
                    each
                  </div>
                </div>
              </div>
            </div>
          ))}
          {TextArray?.length > 0 ? (
            <>
              <div className="mt-[20px] mb-[5px] justify-between flex items-center font-poppins">
                <strong className="text-[14px] font-[600]">
                  Your Total ({netTotal} items){" "}
                </strong>{" "}
                <strong className="text-[14px] font-[600]">
                  $
                  {new Intl.NumberFormat("en-US").format(
                    netTotal *
                      (netTotal === 1
                        ? 35
                        : netTotal > 10
                        ? 25
                        : netTotal <= 5
                        ? 30
                        : 35)
                  )}
                </strong>
              </div>
              <p className="flex items-end font-poppins gap-[5px] text-[14px] justify-center my-[15px]">
                Buy with{" "}
                <img src={affirm} className="w-[45px] h-[20px]" alt="" /> on
                orders over $50.{" "}
                <span className="text-[#27a6ff] hover:underline cursor-pointer">
                  Check your purchasing power
                </span>
              </p>
              <div className="border-[1px] border-[#d0e9c6] rounded-[4px] py-[15px] px-[8px] my-[10px] bg-[#d4edda]">
                <strong className="font-poppins flex items-center gap-[10px] text-[#424447] font-[600] text-[14px]">
                  <img src={piggybank} alt="" width={25} />
                  Buy More Save More!
                </strong>
                <div className="flex justify-between mt-[10px] text-[12px] font-poppins text-[#424447]">
                  <p>
                    Buy <span className="font-[600]">more then 10</span> items
                    and save $10 each
                  </p>{" "}
                  <p>
                    <span className="font-[600]">$25</span> each
                  </p>
                </div>
                <div className="flex justify-between mt-[5px] text-[12px] font-poppins text-[#424447]">
                  <p>
                    Buy <span className="font-[600]">more then 5</span> items
                    and save $5 each
                  </p>{" "}
                  <p>
                    <span className="font-[600]">$30</span> each
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="border-[1px] border-[#b36661] rounded-[4px] py-[15px] px-[8px] my-[10px] bg-[#f2dedf] mt-[20px]">
                <p className="font-poppins text-[#b36661] text-[14px]">
                  You cannot purchase blank products in our studio.{" "}
                  <span
                    className="text-[#7c9fd6] cursor-pointer"
                    onClick={() => setSlide(false)}
                  >
                    Click Here
                  </span>{" "}
                  to add design to project
                </p>
              </div>
            </>
          )}
          {TextArray?.length > 0 ? (
            <div className="flex justify-center mt-[20px]">
              <button
                className="flex gap-[10px] items-center bg-[#27a6ff] px-6 py-2 rounded-full font-poppins text-[#fff] uppercase hover:bg-[#0196ff] cursor-pointer"
                onClick={showModal}
              >
                Add to Cart <FaArrowRight />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div>
          <p className="font-poppins text-[10.5px] text-[#27a6ff] font-[600] ">
            QUANTITY & SIZES
          </p>
          <div className="flex gap-[10px] justify-between my-[10px]">
            <h2 className="flex gap-[10px] font-poppins font-[600] lg:text-[22px] text-[16px] text-[#424447] items-center">
              <FaArrowLeft
                className="text-[22px] cursor-pointer"
                onClick={() => setSlide(false)}
              />
              Choose Quantity & Sizes
            </h2>
            <CloseOutlined
              className="text-[22px]"
              onClick={() => setSlide(false)}
            />
          </div>
          <p className="lg:text-[.85em] text-[12px] text-[#8d9095] font-poppins">
            Enter quantities to calculate the price. Save money by increasing
            quantity and reducing ink colors in your design.
          </p>
          <div className="border-[1px] border-[#e4e5e9] w-[100%] my-[20px]"></div>

          {selectedColors.map((color, index) => (
            <div className="" key={index}>
              <div className="flex w-[100%] border-b-[#dadada] border-b-[1px] pb-[20px] items-center">
                <div className="w-[10%] mt-[10px]">
                  {openStates[index] ? (
                    <FaArrowDown
                      onClick={() => toggleOpen(index)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaArrowRight
                      onClick={() => toggleOpen(index)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
                <div className="w-[15%]">
                  <FrontImageSmall
                    color={{ useMask: true, maskColor: color }}
                  />
                </div>
                <div className="w-[60%]">
                  <h2 className="font-poppins font-[600] lg:text-[14px] text-[12px]">
                    RT2000 RushOrderTees Classic Tee
                  </h2>
                  <p className="font-poppins font-[400] text-[12px]">
                    {getColorName(color)}
                  </p>
                </div>
                <div className="w-[20%] font-poppins font-[400] text-[12px]">
                  {new Intl.NumberFormat("en-US").format(getTotalItems(index))}{" "}
                  items
                </div>
              </div>
              {openStates[index] && (
                <>
                  <h2 className="font-[700] font-poppins text-[14px] text-[#424447] mt-[30px]">
                    Adult Sizes
                  </h2>
                  <div className="flex gap-[10px] flex-wrap">
                    {["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"].map(
                      (size) => (
                        <div className="flex flex-col items-center" key={size}>
                          <p className="font-poppins font-[400] text-[12px] text-[#424447]">
                            {size}
                          </p>
                          <input
                            type="number"
                            className="w-[55px] border-[1px] border-[#ccc] rounded-md px-2 py-1 focus:outline-0 focus:border-[1px] focus:border-[#66afe9] input-shadow"
                            value={
                              quantities[index][size] === 0
                                ? ""
                                : quantities[index][size]
                            }
                            onChange={(e) =>
                              handleQuantityChange(index, size, e.target.value)
                            }
                          />
                        </div>
                      )
                    )}
                  </div>
                  <h2 className="font-[700] font-poppins text-[14px] text-[#424447] mt-[10px]">
                    Youth Sizes
                  </h2>
                  <div className="flex gap-[10px] mb-[10px]">
                    {["YSX", "YS", "YM", "YL", "YXL"].map((size) => (
                      <div className="flex flex-col items-center" key={size}>
                        <p className="font-poppins font-[400] text-[12px] text-[#424447]">
                          {size}
                        </p>
                        <input
                          type="number"
                          className="w-[55px] border-[1px] border-[#ccc] rounded-md px-2 py-1 focus:outline-0 focus:border-[1px] focus:border-[#66afe9] input-shadow"
                          value={
                            quantities[index][size] === 0
                              ? ""
                              : quantities[index][size]
                          }
                          onChange={(e) =>
                            handleQuantityChange(index, size, e.target.value)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="flex justify-center lg:mt-[150px] mt-[80px]">
            {pricingActive ? (
              <button
                className="flex gap-[10px] items-center bg-[#27a6ff] px-6 py-2 rounded-full font-poppins text-[#fff] uppercase hover:bg-[#0196ff] cursor-pointer"
                onClick={() => setPriceView(true)}
              >
                Calculate Pricing <FaArrowRight />
              </button>
            ) : (
              <button className="flex gap-[10px] items-center bg-[#27a6ff] px-6 py-2 rounded-full font-poppins text-[#fff] uppercase hover:bg-[#0196ff] cursor-not-allowed">
                Calculate Pricing <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      )}
      <Modal
        title="SAVE AND ADD TO CART"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        {progressVisible ? (
          <div className="my-[20px]">
            <h2 className="font-poppins text-[22px] text-[#424447] text-center font-[500]  mb-[5px]">
              Retrieving Your Saved Designs
            </h2>
            <p className="font-poppins text-[16px] text-[#424447] text-center">
              Checking for existing designs....
            </p>
            <div className="mx-[30px] pb-[40px] mt-[40px]">
              <Progress percent={progress} size={[540, 20]} />
            </div>
          </div>
        ) : navigateCart ? (
          <div className="w-[60%] mx-auto flex flex-col justify-center items-center">
            <img src={vedio} alt="" srcSet="" width={150} height={150}/>
            <h2 className="font-poppins text-[20px] font-[600] text-[22px] text-center pb-[40px]">Saving your design &
            emailing you a link</h2>
          </div> 
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-full mt-[20px] mb-[40px]"
          >
            <h2 className="font-poppins text-[22px] text-[#424447] text-center font-[500]  mb-[5px]">
              Add to Cart
            </h2>
            <p className="font-poppins text-[16px] text-[#424447] text-center">
              Name and save your design to proceed to checkout.
            </p>
            <div className="flex flex-col justify-center w-[100%] mt-[40px]">
              <input
                type="text"
                placeholder="Enter Design Name"
                value={designName}
                onChange={handleDesignNameChange}
                required
                className="font-poppins focus:outline-none text-[15px] border-[1px] border-[#8a6d3b] placeholder:text-[#cccfd6] px-4 py-2 w-[60%] rounded-[4px] mx-auto"
              />
              {errors.designName ? (
                <p className="font-poppins text-14px text-[#8a6d3b] text-left p-2 bg-[#fcf8e3] w-[60%] border-[1px] border-[#faebcc] rounded-[4px] my-[5px] mx-auto">
                  {errors.designName}
                </p>
              ) : (
                <p className="font-poppins text-[14px] text-[#8D9095] text-center my-[10px]">
                  25 characters max, no symbols except dashes
                </p>
              )}
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                required
                onChange={handleEmailChange}
                className="font-poppins focus:outline-none text-[15px] border-[1px] border-[#8a6d3b] placeholder:text-[#cccfd6] px-4 py-2 w-[60%] rounded-[4px] mx-auto"
              />
              {errors.email && (
                <p className="font-poppins text-14px text-[#8a6d3b] text-left p-2 bg-[#fcf8e3] w-[60%] border-[1px] border-[#faebcc] rounded-[4px] my-[5px] mx-auto">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="flex justify-center mt-[20px] pb-[30px]">
              <button
                type="submit"
                className="flex gap-[10px] items-center bg-[#27a6ff] px-6 py-2 rounded-full font-poppins text-[#fff] uppercase hover:bg-[#0196ff] cursor-pointer"
              >
                Continue
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Quantity;
