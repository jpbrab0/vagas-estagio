import Link from "next/link"
import { motion } from "framer-motion"
import styled from "styled-components"

const easing = [.6, -.05, .01, .99]

const fadeInDown = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing,
    }
  }
}

const fadeInLeft = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing,
    }
  }
}

export default function Home() {
  return (
    <>
      <Center exit={{ opacity: 0 }} initial={{opacity: 0}} animate={{ opacity:1}}>
        <WelcomeContent>
          <motion.div 
            initial="initial" 
            animate="animate" 
            variants={fadeInDown}
          >
            <h1>Vagas para estágio em T.I</h1>
          </motion.div>
          <motion.div initial="initial" animate="visible" variants={
            {
              initial: {
                x: -200,
                scale: 1,
                opacity: 1,
              },
              visible: {
                x: 40,
                position: "initial",
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .1
                }
              }
            }
          }>
            <Link href="/vagas">
              <RedirectButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Ver vagas disponíveis!
              </RedirectButton>
            </Link>
          </motion.div>
        </WelcomeContent>
      </Center>
      <Footer>
        <motion.h2 
          initial="initial" 
          animate="animate" 
          variants={fadeInLeft}>
          Feito por <a href="https://jpres.dev" target="_blank">João Pedro</a>
        </motion.h2>
      </Footer>
    </>
  )
}

const Center = styled(motion.main)`
  width: 100%;
  display: flex;
  margin-top: 62px;
  justify-content: center;
  align-items: center;
`

const WelcomeContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    font-size: 1.8rem;
  }
`

const RedirectButton = styled(motion.button)`
  border: none;
  outline: none;
  padding: 16px;
  background-color: #1A94DB;
  border-radius: 13px;
  color: #fff;
  width: 80%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  align-self: center;
`

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`
