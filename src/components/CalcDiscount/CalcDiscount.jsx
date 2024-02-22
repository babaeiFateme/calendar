import { getDisCount } from "src/core/utils/getDiscount";
import Button from "../common/Button/Button";
import { useState } from "react";

const CalcDiscount = () => {
    const [formData, setFormData] = useState({
        discount: 0,
        num: 0,
    });
    const [discountResult, setDiscountResult] = useState(null);

    const generateDiscountHandler = (e) => {
        e.preventDefault();
        const result = getDisCount(formData.discount, formData.num);
        setDiscountResult(result);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <form
                className="flex flex-col md:flex-row md:gap-[27px] items-end flex-wrap"
                onSubmit={generateDiscountHandler}
            >
                <div className="max-w-[406px] w-full flex flex-col">
                    <label
                        htmlFor="discount"
                        className="font-extrabold text-2xl mb-2"
                    >
                        درصد
                    </label>
                    <input
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        className="sp-border rounded-sm py-[15px] px-[24px] h-[66px] max-w-[406px] bg-gray-700 font-normal text-base text-white placeholder:text-white placeholder:text-base "
                        name="num"
                        type="text"
                        id="num"
                        placeholder="مقدار عدد خود را وارد کنید"
                    />
                </div>
                <Button
                    type="submit"
                    className="h-[66px] px-[28px] py-[15px] rounded-sm font-extrabold bg-green-500 max-w-[178px]"
                >
                    %محاسبه
                </Button>
            </form>
            {discountResult !== null && (
                <div className="flex justify-between items-center bg-gray-700 text-white px-[24px] py-[44px] my-8">
                    <span>
                        {formData.discount}٪ عدد {formData.num} برابر است:
                    </span>
                    <span>{discountResult}</span>
                </div>
            )}
        </>
    );
};

export default CalcDiscount;
