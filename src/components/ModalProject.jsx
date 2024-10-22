import PropTypes from 'prop-types';
import styled from "styled-components";
import { FaExternalLinkAlt as LinkIcon } from "react-icons/fa";
import MyOctalCat from '../assets/my-octal.png';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

const Modal = styled.section`
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    padding: 2rem;
`;

const ModalContent = styled.div`

    background-color: white;
    padding: 1rem;
    min-height: 80vh;
    width: 80vw;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    border-radius: 8px;
    position: relative !important;

    > figure {

        position: absolute;
        width: 10rem;
        bottom: 0;
        left: 0;
        
        img {
            width: 100%;
        }
    }

    p {
        font-size: 1rem;
        padding-right: 4rem;
    }

    div {
        flex: 1;

        > h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        &:nth-child(2) {

            button {
                border: none;
                border-radius: .5rem;
                display: flex;
                gap: .5rem;
                align-items: center;
                justify-content: center;
                padding: .5rem 2rem;

                cursor: pointer;
                margin-top: 2rem;
                font-weight: bold;
            }
        }

        &:last-child {
            z-index: 0;
            position: relative;


            .swiper-container {
                max-width: 600px !important;

                object-fit: cover;

                figure {        
                    overflow: hidden;

                    img {

                    }
                }
    
            }
        }

            > section {
                gap: 2rem;
                display: flex;
                width: 600px;
                position: absolute;
                left: 50%;
                bottom: 0px;
                z-index: 1;
                transform: translateX(-50%);
                
                figure {
                    flex: 1;
                    cursor: pointer;

                    img {
                        box-sizing: content-box;
                        width: 100%;
                        border-radius: 4px;
                        border: 2px solid transparent; /* Borda padrão */
                    }

                    &.active img {
                        border-color: blue; /* Destacar miniatura ativa */
                        transform: scale(1.1);
                    }
                }
            }
        }
`;

const CloseButton = styled.button`
    position: absolute;
    top: -1rem;
    right: -1rem;
    background: transparent;
    border: none;
    font-size: 3rem;
    box-sizing: content-box;
    padding: .1rem 1rem;
    background-color: red;
    border-radius: 100%;
    cursor: pointer;
    z-index: 1;
`;

export const ModalProject = ({ imageSrc, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0); // Estado para armazenar o índice ativo
    const swiperRef = useRef(null);
  
    const handleOutsideClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };
  
    const handleThumbnailClick = (index) => {
      swiperRef.current.swiper.slideTo(index);
    };
  
    return (
      <Modal onClick={handleOutsideClick}>
        <ModalContent>
          <CloseButton onClick={onClose}>×</CloseButton>
  
          <div>
            <h3>Titulo do projeto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus magni numquam!
              Enim, culpa tenetur repellat ipsa ipsam quisquam omnis labore beatae illo expedita nemo
              rerum dicta, animi porro deserunt!
            </p>
            <button>Visitar projeto <LinkIcon /></button>
          </div>
  
          <figure>
            <img src={MyOctalCat} alt="my-octal" />
          </figure>
  
          {/* Swiper carousel */}
          <div>
            <Swiper
              ref={swiperRef}
              modules={[ Keyboard, Autoplay]}
              keyboard={{ clickable: true }}
            //   autoplay={{ delay: 2500 }}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              initialSlide={activeIndex}
              className='swiper-container'
            //   loop={true} 
            >
              {[imageSrc, imageSrc, imageSrc].map((src, index) => (
                <SwiperSlide key={index}>
                  <figure>
                    <img src={src} alt={`slide-${index}`} />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
  
            {/* Thumbnails */}
            <section>
              {[imageSrc, imageSrc, imageSrc].map((src, index) => (
                <figure
                  key={index}
                  className={activeIndex === index ? 'active' : ''}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={src} alt={`thumb-${index}`} />
                </figure>
              ))}
            </section>
          </div>
        </ModalContent>
      </Modal>
    );
  };
  
ModalProject.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};
