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
            <form className="flex flex-col md:flex-row md:gap-[27px] items-end flex-wrap">
                <div className="max-w-[406px] w-full flex flex-col">
                    <label
                        htmlFor="discount"
                        className="font-extrabold text-2xl mb-2"
                    >
                        درصد
                    </label>
                    <input
                        className="sp-border rounded-sm py-[15px] px-[24px] h-[66px] bg-gray-700 font-normal text-base text-white placeholder:text-white placeholder:text-base"
                        type="number"
                        name="discount"
                        id="discount"
                        placeholder="میزان درصد  خود را وارد کنید"
                    />
                </div>
                <div className="max-w-[406px] w-full flex flex-col">
                    <label
                        htmlFor="num"
                        className="font-extrabold text-2xl mb-2"
                    >
                        عدد مورد نظر را وارد کنید
                    </label>
                    <input
                        className="sp-border rounded-sm py-[15px] px-[24px] h-[66px] max-w-[406px] bg-gray-700 font-normal text-base text-white placeholder:text-white placeholder:text-base "
                        name="num"
                        type="text"
                        id="num"
                        placeholder="مقدار عدد خود را وارد کنید"
                    />
                </div>
                <Button className="h-[66px] px-[28px] py-[15px] rounded-sm font-extrabold bg-green-500 max-w-[178px]">
                    %محاسبه
                </Button>
            </form>
            <div className="flex justify-between items-center bg-gray-700 text-white px-[24px] py-[44px] my-8">
                <span>
                    {disCountVal}٪ عدد {num} برابر است:
                </span>
                <span>{getDiscountResult}</span>
            </div>
        </>
    );
};

export default CalcDiscount;
