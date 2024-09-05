import React from "react";
import LiveStream from "./LiveStream";
import ButtonGroup from "./ButtonGroup";
import Button from "@/app/components/buttons/Button";

const HeroCard = ({ data }) => {
    return (
        <div key={"hero-card-sec"} className={`${data.bgImg} min-h-[36rem] md:min-h-[40.375rem] 2xl:min-h-[50rem] bg-cover bg-center`}>
            <div className="container mx-auto px-4 lg:px-0">
                <div className={`${data.cardContentStyle}`}>
                    {
                        data.isLiveStreamAvailable && <LiveStream />
                    }
                    <div dangerouslySetInnerHTML={{ __html: `${data.heading}` }}></div>
                    {
                        data.isDeadline && <>
                            <div dangerouslySetInnerHTML={{ __html: `${data.deadLine}` }}></div>
                        </>
                    }
                    {
                        data.isDeadlineWithTime && <>
                            <div dangerouslySetInnerHTML={{ __html: `${data.deadLineWithTime}` }}></div>
                        </>
                    }
                    {
                        data.isOffer && <>
                            <div dangerouslySetInnerHTML={{ __html: `${data.offer}` }}></div>
                        </>
                    }
                    {
                        data.isCommingSoon && <>
                            <div className="text-start mt-[2.68rem]">
                                <Button
                                    label="Comming Soon"
                                    className={'text-[1.5rem] md:text-[2rem] lg:text-[3.125rem] rounded-lg py-[0.93rem] px-7'}
                                />
                            </div>
                        </>
                    }
                    {
                        data.isRecipes && <>
                            <div className="mt-[2.68rem] text-start" dangerouslySetInnerHTML={{ __html: `${data.recipes}` }}>
                                {/* <span className="text-[#FA2147] text-[1.5rem] lg:text-[2.5rem]">10+ Recipes</span> */}
                            </div>
                        </>
                    }
                    <div className="mt-5">
                        <ButtonGroup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard