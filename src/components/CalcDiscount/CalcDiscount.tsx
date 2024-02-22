
import { getDisCount } from "src/utils/getDiscount";
import Button from "../common/Button/Button";
import { useState, ChangeEvent, FormEvent } from "react";
interface FormData {
    discount: number;
    num: number;
}
const CalcDiscount = () => {
    const [formData, setFormData] = useState<FormData>({
        discount: 0,
        num: 0,
    });
    const [discountResult, setDiscountResult] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const validateFormData = (data: FormData): boolean => {
        if (data.discount < 0 || data.discount > 100) {
            setErrorMessage("درصد باید بین ۰ تا ۱۰۰ باشد.");
            return false;
        }
        if (data.num <= 0) {
            setErrorMessage("عدد باید مقدار مثبت داشته باشد .");
            return false;
        }
        return true;
    };

    const generateDiscountHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateFormData(formData)) {
            const result = getDisCount(formData.discount, formData.num);
            setDiscountResult(result);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <div className="flex flex-col gap-3 my-[37px]">
                <h2 className="text-green-400 font-extrabold text-2xl mb-[7px]">
                    تخفیفم چقدر شده؟
                </h2>
                <span className="font-normal text-xl">
                    برای محاسبه درصد تست , تخفیف و ... اطلاعات کادر زیر را وارد کنید                </span>
            </div>
            {/* Error message display */}
            {errorMessage && <div className="text-red-500 text-center px-3 py-4 bg-red-100 max-w-[400px] mx-auto my-8">{errorMessage}</div>}
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
                    // type="submit"
                    className="h-[66px] px-[28px] py-[15px] rounded-sm font-extrabold bg-green-500 max-w-[178px]"
                >
                    %محاسبه
                </Button>
            </form>
            <div className="flex justify-between items-center bg-gray-700 text-white px-[24px] py-[44px] my-8">
                <span>
                    {formData.discount}٪ عدد {formData.num} برابر است:
                </span>
                <span>{discountResult}</span>
            </div>
        </>
    );
};

export default CalcDiscount;
