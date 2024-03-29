import React, { useState, useRef, useMemo } from "react";
import { cities } from "../../utils/constants";
import ReactSelect from "react-select";
import "./buy.css";

const bot = {
    phone: {
        TOKEN: "6377527692:AAH6MZTNPRIUnx9Kdq-gGLW4bMXM9oe0zWU",
        chatID: "-4142458265",
    },
    pc: {
        TOKEN: "7140779842:AAGApVDtbYmVFLbE6_qCvBO7qhQhF1XGhfo",
        chatID: "-4130325785",
    },
    planshet: {
        TOKEN: "6377527692:AAH6MZTNPRIUnx9Kdq-gGLW4bMXM9oe0zWU",
        chatID: "-4142458265",
    },
};

export default function Buy({ buy, data }) {
    // useState
    const [value, setValue] = useState(cities[0]);
    const [regionValue, setRegionValue] = useState(null);
    const [region, setRegion] = useState(null);
    const [opened, setOpened] = useState(false);
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    // useRef=====================================
    const ref = useRef(null);


    const Price = buy.reduce((price, item) => price + item.quantity * item.price, 0);
    const request = (bot, arr, category) => {

        fetch(
            `https:api.telegram.org/bot${bot.TOKEN}/sendlocation?chat_id=${bot.chatID}&latitude=${latitude}&longitude=${longitude}`,
            {
                method: "GET",
            }
        ).catch((e) => console.log("Hato " + e));
        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendPhoto?chat_id=${bot.chatID}&photo=${arr.map((x) => x.url)}`,
            {
                method: "GET",
            }
        ).catch((e) => console.log("Hato " + e));
        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID
            }&text=${encodeURI(
                `Buyurtma!\n\nBuyurtmachi ismi:${ref.current.value}\n\n${arr
                    .map(
                        (prod) =>
                            `Mahsulot:${prod.title} \n\nNarxi: ${prod.price
                            }`
                    )
                    .join(
                        "\n\n"
                    )}\n\nYetkazib berish manzili: ${region}\n\n Katetoriya: ${category} \n\n Jami:${Price}$`
            )}&latitude=${latitude}&longitude=${longitude}`,
            {
                method: "GET",
            }
        ).catch((e) => console.log("Hato " + e));
    }



    function handleForm(e) {
        e.preventDefault();
        const phones = buy.filter((product) => product.category === "Phone");
        const computers = buy.filter((product) => product.category === "pc");
        const planshet = buy.filter((product) => product.category === "planshet");

        if (phones.length) {
            request(bot.phone, phones, 'telefon');
        }

        if (computers.length) {
            request(bot.pc, computers, 'pc');
        }
        if (planshet.length) {
            request(bot.planshet, planshet, 'planshet');
        }
        ref.current.value = "";
    }

    return (
        <div className="product">
            <div className="select_wrap">
                <ReactSelect
                    className={"custome-select"}
                    value={value}
                    options={cities}
                    onChange={(option) => {
                        setValue(option);
                        setRegionValue(option?.regions?.[0]);
                        setLatitude(option?.latitude);
                        setLongitude(option?.longitude);

                    }}
                    isLoading={false}
                    isClearable
                    onMenuOpen={() => setOpened(true)}
                    onMenuClose={() => setOpened(false)}
                />
                <ReactSelect
                    className={"custome-select" + (opened ? " z-99" : "")}
                    isDisabled={!value?.regions}
                    value={regionValue}
                    options={value?.regions}
                    onChange={(option) => {
                        setRegionValue(option);
                    }}
                    isLoading={false}
                    isClearable
                    onMenuOpen={() => setOpened(true)}
                    onMenuClose={() => setOpened(false)}
                />
                <ReactSelect
                    className={"custome-select" + (opened ? " z-99" : "")}
                    isDisabled={!value?.label || !regionValue?.label}
                    options={Array.from({ length: 3 }, (_, i) => ({
                        label: `${value?.label} , ${regionValue?.label} , ${i + 1
                            } - filial`,
                    }))}
                    onChange={(e) => setRegion(e.label)}
                    isLoading={false}
                    isClearable
                    onMenuOpen={() => setOpened(true)}
                    onMenuClose={() => setOpened(false)}
                />
                <form onSubmit={(e) => handleForm(e)} className="form2">
                    <input type="text" placeholder="Name..." ref={ref} />
                    <button className="send_btn">send</button>
                </form>
            </div>
        </div>
    );
}
