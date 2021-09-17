import axios from "axios"
import { useEffect, useState } from "react"
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

function Vagas(){
    const [jobs, setJobs] = useState(undefined)

    useEffect(async () => {
        const response = await axios.get("https://api.github.com/repos/jpbrab0/vagas-estagio/issues")

        const json = response.data
        if(json != undefined) {
            setJobs(json)
        } else {
            console.log("deu ruim")
        }
    }, [])
    if(jobs != undefined && jobs != "") {
        return (
            <Center exit={{ opacity: 0 }} initial={{opacity: 0}} animate={{ opacity:1}}>
                <motion.h1 variants={fadeInDown} initial="initial" animate="animate">Todas as vagas!</motion.h1>
                <JobsWrapper>
                    {jobs.map((job, index) => (
                        <JobInfo href={job.html_url} target="_blank" 
                            variants={
                                {
                                    initial: {
                                        y: 60,
                                        opacity: 0,
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            // - Gambiarra topjonson topnelson para cada elemento demorar um pouco para aparecer
                                            // - já que o staggerChildren não funciona vai ter que ser assim xD
                                            duration: index / 10,
                                            ease: easing,
                                        }
                                    }
                                }
                            } 
                            whileHover={{ position: "relative", zIndex: 1, scale: [1., 1.1], transition: { duration: .2 } }} whileTap={{ scale: 0.9 }}
                            initial="initial" 
                            animate="animate" 
                            key={index}
                        >
                            <h1>{job.title}</h1>
                            <p>Salário: $$$</p>
                        </JobInfo>
                    ))}
                </JobsWrapper>
            </Center>
        )
    } else if(jobs == "") {
        return (
            <Center>
                <h1>Infelizmente ainda não tem nenhuma vaga para exibir aqui :(</h1>
                <Link href="https://github.com/jpbrab0/vagas-estagio/issues/new/choose" target="_blank">Caso você tenha alguma vaga de estágio para divulgar, clique aqui!</Link>
            </Center>
        )
    }
    return ( 
        <Center>
            <h1>Carregando...</h1>
        </Center>
    )
}

const Center = styled(motion.main)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const JobsWrapper = styled(motion.section)`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`

const JobInfo = styled(motion.a)`
    margin: 23px auto;
    width: 40%;
    border: 1px solid #f1f1f1;
    border-radius: 13px;
    padding: 13px;
    text-decoration: none;
    color: #000;
    h1{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #7154c1;
    font-size: 1.6rem;
    transition: 0.3s;
    font-weight: bold;

    &:hover{
        opacity: 80%;
    }
`

export default Vagas