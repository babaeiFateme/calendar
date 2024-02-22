import { getDisCount } from "src/core/utils/getDiscount";
import Button from "../common/Button/Button";
import { useAsyncError } from "react-router-dom";
import { useState } from "react";
const CalcDiscount = () => {
    const getDiscountResult = getDisCount(20, 800);
    const [disCountVal, setDiscountVal] = useState(0);
    const [num, setNum] = useState(0);
    return (
        <>
            <form className="grid sm:grid-cols-2 md:grid-cols-8 bg-green-400 md:gap-[27px]">
                <div className="lg:col-span-3 flex flex-col">
                    <label
                        htmlFor="discount"
                        className="font-extrabold text-2xl"
                    >
                        درصد
                    </label>
                    <input
                        type="number"
                        name="discount"
                        id="discount"
                        placeholder="میزان درصد  خود را وارد کنید"
                    />
                </div>
                <div className="lg:col-span-3 bg-green-400 flex flex-col">
                    <label htmlFor="num" className="font-extrabold text-2xl">
                        عدد مورد نظر را وارد کنید
                    </label>
                    <input
                        name="num"
                        type="text"
                        id="num"
                        placeholder="مقدار عدد خود را وارد کنید"
                    />
                </div>
                <Button className="md:col-span-2 px-[28px] py-[15px] rounded-sm font-extrabold bg-green-500">
                    %محاسبه
                </Button>
            </form>
            <div className="flex justify-between items-center bg-green-100 text-green-800 px-[24px] py-[44px] my-8">
                <span>
                    {disCountVal}٪ عدد {num} برابر است:
                </span>
                <span>{getDiscountResult}</span>
            </div>
        </>
    );
};

export default CalcDiscount;
