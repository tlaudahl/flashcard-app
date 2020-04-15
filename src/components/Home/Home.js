import React from 'react';
import styled from 'styled-components';
import magnifying_glass from '../../assets/magnifying_glass.png' 
import create_card from '../../assets/create_card.png' 

const ContentType2 = styled.div`
    box-shadow: none;
    height: 100%;
    margin: 0 auto 30px;
    position: relative;
    width: 1031px;
`

const TopPlacement = styled.div`
    display: inline-block;
    height: 235px;
    padding: 0 40px;
    width: 900px;
    position: relative;
`

const FormHolder = styled.div`
    background: url(${magnifying_glass}) no-repeat 0 90px;
    float: left;
    height: 100px;
    padding: 60px 0 80px;
    width: 76%;
`

const FormHolderH1 = styled.h1`
    font-weight: 600;
    letter-spacing: .2px;
    font-size: 30px;
    margin-bottom: 4px;
    text-align: left;
    text-shadow: -1px -1px #ccc, 1px 1px #fff;
    color: #404040;
`

const SearchInput = styled.input`
    box-shadow: 1px 1px 6px #CCC inset;
    color: #8F908F;
    float: left;
    font-style: italic;
    height: 36px;
    margin: 0 -12px 0 0;
    width: 330px;
    display: block;
    background: #FFF;
    border: 1px solid #DDD;
    padding: 5px 10px;
    font-size: 14px;
    text-shadow: none;
    border-radius: 4px;
`

const SearchButton = styled.button`
    -webkit-appearance: none;
    box-shadow: 0 0 0 white;
    margin-left: 20px;
    width: 100px;
    opacity: 1;
    background: #8ABC54;
    color: #FFF;
    font-weight: 600;
    padding: 12px 0px;
    -webkit-border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    font-size: 16px;
    text-align: center;
    border: 0px;
`

const OptionCallout = styled.div`
    color: #333;
    display: block;
    height: 40px;
    left: 584px;
    position: relative;
    text-align: center;
    top: 100px;
    width: 40px;
`

const OptionCalloutP = styled.p`
    font-size: 24px;
    font-weight: 600;
    left: 8px;
    position: absolute;
    top: 2px;
    z-index: 1;
`

const LineBorder = styled.div`
    border-right: 1px solid #fff;
    box-shadow: 1px 0 0 #CCC;
    height: 140px;
    left: -20px;
    position: relative;
    top: -50px;
    z-index: 0;
`

const CtaPromo = styled.div`
    background: url(${create_card}) no-repeat 10px 0 transparent;
    height: 100px;
    position: absolute;
    text-align: center;
    right: 0px;
    top: 54px;
    z-index: 1;
`

const CtaLink = styled.a`
    text-decoration: none;
    opacity: 1;
    top: 50px;
    left: -20px;
    position: relative;
    background: #8ABC54;
    color: #FFF;
    font-weight: 600;
    padding: 12px 0px;
    width: 200px;
    -webkit-border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    line-height: normal;
    font-size: 16px;
    text-align: center;
    border: 0px;
`

const CtaPromoH2 = styled.h2`
    font-weight: 600px;
    font-size: 22px;
    margin: 80px 0 0 -40px;
    letter-spacing: .2px;
`

export default function Home() {
    return (
        <ContentType2>
            <header>
                <TopPlacement>
                    <FormHolder>
                        <div style={{ marginLeft: '80px' }}>
                            <FormHolderH1>
                                Find Flashcards to study
                            </FormHolderH1>
                            <form>
                                <ul style={{ width: '100%', listStyle: 'none', position: "relative", left: "-40px" }}>
                                    <li>
                                        <SearchInput placeholder={"Search over 195 million flashcards"} maxLength={"250"} size={"40"}/>
                                    </li>
                                    <li>
                                        <SearchButton type={'submit'}>Search</SearchButton>
                                    </li>
                                </ul>
                            </form>
                        </div> 
                    </FormHolder>
                    <OptionCallout>
                        <OptionCalloutP>or</OptionCalloutP>
                        <LineBorder />
                    </OptionCallout>
                    <CtaPromo>
                        <CtaLink href='/flashcard/create'>
                            <span>Create Flashcards</span>
                        </CtaLink>
                        <CtaPromoH2>Make your own cards</CtaPromoH2>
                    </CtaPromo>
                </TopPlacement>
            </header>
        </ContentType2>
    )
}