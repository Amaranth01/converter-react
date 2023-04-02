import './Converter.css';
import {useState} from "react";

export const Converter = function () {
    const [unitMeter, setUnitMeter] = useState('m');
    const [unitLiter, setUnitLiter] = useState('l');
    const [conversionUnitMeter, setConversionUnitMeter] = useState('m');
    const [conversionUnitLiter, setConversionUnitLiter] = useState('l');
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');

    const handleChangeUnitMeter = (e) => {
        setUnitMeter(e.target.value);
    }

    const handleChangeUnitLiter = (e) => {
        setUnitLiter(e.target.value)
    }

    const handleConvertMeter = () => {
        const conversion = convertMeter[unitMeter][unitLiter] * value;
        setResult(conversion);
    };

    const handleConvertLiter = () => {
        const conversion = convertLiter[unitLiter][unitMeter] * value;
        setResult(conversion);
    };

    const handleChangeConversionUnitMeter = (e) => {
        setConversionUnitMeter(e.target.value);
    };

    const handleChangeConversionUnitLiter = (e) => {
        setConversionUnitLiter(e.target.value);
    };

    const convertMeter = {
        m: {
            cm: 100,
            dm: 10,
            mm: 1000,
        },
        dm: {
            cm: 10,
            m: 0.1,
            mm: 100,
        },
        cm: {
            m: 0.01,
            dm: 0.1,
            mm: 10,
        },
        mm: {
            cm: 0.1,
            m: 0.001,
            dm: 0.01,
        },
    };

    const convertLiter = {
        l: {
            cl: 100,
            dl: 10,
            ml: 1000,
        },
        dl: {
            cl: 10,
            l: 0.1,
            ml: 100,
        },
        cl: {
            l: 0.01,
            dl: 0.1,
            ml: 10,
        },
        ml: {
            cl: 0.1,
            l: 0.001,
            dl: 0.01,
        },
    };

    return (
        <>
            {unitMeter &&
                <>
                    <div className='enterValueMeter'>
                        <p>Valeur à convertir : </p>
                        <input type="number"/>
                        <select name="unitMeterSelect" id="unitMeterSelect" value={unitMeter} onChange={handleChangeUnitMeter}>
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="dm">dm</option>
                            <option value="m">m</option>
                        </select>
                    </div>

                    <div className='endingValueMeter'>
                        <p>Conversion</p>
                        <select name="unitMeter" id="unitMeter" value={conversionUnitMeter} onChange={handleChangeConversionUnitMeter}>
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="dm">dm</option>
                            <option value="m">m</option>
                        </select>
                    </div>
                    <div>
                        <label>Résultat:</label>
                        <input type="number" value={result} disabled/>
                        <button onClick={handleConvertMeter}>Convertir</button>
                    </div>

                </>
            }

            {unitLiter &&
                <>
                    <div className='EnterValueLiter'>
                        <p>Valeur à convertir : </p>
                        <input type="number"/>
                        <select name="unitLiterSelect" id="unitLiterSelect" value={unitLiter} onChange={handleChangeUnitLiter}>
                            <option value="ml">ml</option>
                            <option value="cl">cl</option>
                            <option value="dl">dl</option>
                            <option value="l">l</option>
                        </select>
                    </div>

                    <div className='endingValueLiter'>
                        <p>Conversion : </p>

                        <select name="unitLiter" id="unitLiter" value={conversionUnitLiter} onChange={handleChangeConversionUnitLiter}>
                            <option value="ml">ml</option>
                            <option value="cl">cl</option>
                            <option value="dl">dl</option>
                            <option value="l">l</option>
                        </select>
                    </div>
                    <div>
                        <label>Résultat:</label>
                        <input type="number" value={result} disabled/>
                        <button onClick={handleConvertLiter}>Convertir</button>
                    </div>
                </>
            }
        </>
    );
}
