import './Converter.css';
import {useState} from "react";

export const Converter = function () {
    const [unitMeter, setUnitMeter] = useState('mm');
    const [unitLiter, setUnitLiter] = useState('ml');
    const [conversionUnitMeter, setConversionUnitMeter] = useState('m');
    const [conversionUnitLiter, setConversionUnitLiter] = useState('l');
    const [valueMeter, setValueMeter] = useState('');
    const [valueLiter, setValueLiter] = useState('');
    const [resultMeter, setResultMeter] = useState('');
    const [resultLiter, setResultLiter] = useState('');

    //Update value status and stock
    const handleChangeUnitMeter = (e) => {
        setUnitMeter(e.target.value);
    }

    const handleChangeUnitLiter = (e) => {
        setUnitLiter(e.target.value)
    }
//Calculate conversions
    const handleConvertMeter = () => {
        let conversion = parseFloat(valueMeter);
        if (unitMeter === 'mm') {
            if (conversionUnitMeter === 'cm') {
                conversion = conversion / 10;
            } else if (conversionUnitMeter === 'dm') {
                conversion = conversion / 100;
            } else if (conversionUnitMeter === 'm') {
                conversion = conversion / 1000;
            }
        } else if (unitMeter === 'cm') {
            if (conversionUnitMeter === 'mm') {
                conversion = conversion * 10;
            } else if (conversionUnitMeter === 'dm') {
                conversion = conversion / 10;
            } else if (conversionUnitMeter === 'm') {
                conversion = conversion / 100;
            }
        } else if (unitMeter === 'dm') {
            if (conversionUnitMeter === 'mm') {
                conversion = conversion * 100;
            } else if (conversionUnitMeter === 'cm') {
                conversion = conversion * 10;
            } else if (conversionUnitMeter === 'm') {
                conversion = conversion / 10;
            }
        } else if (unitMeter === 'm') {
            if (conversionUnitMeter === 'mm') {
                conversion = conversion * 1000;
            } else if (conversionUnitMeter === 'cm') {
                conversion = conversion * 100;
            } else if (conversionUnitMeter === 'dm') {
                conversion = conversion * 10;
            }
        }
        setResultMeter(conversion);
    };

    const handleConvertLiter = () => {
        let conversion = parseFloat(valueLiter);
        if (unitLiter === 'ml') {
            if (conversionUnitLiter === 'cl') {
                conversion = conversion / 10;
            } else if (conversionUnitLiter === 'dl') {
                conversion = conversion / 100;
            } else if (conversionUnitLiter === 'l') {
                conversion = conversion / 1000;
            }
        } else if (unitLiter === 'cl') {
            if (conversionUnitLiter === 'ml') {
                conversion = conversion * 10;
            } else if (conversionUnitLiter === 'dl') {
                conversion = conversion / 10;
            } else if (conversionUnitLiter === 'l') {
                conversion = conversion / 100;
            }
        } else if (unitLiter === 'dl') {
            if (conversionUnitLiter === 'ml') {
                conversion = conversion * 100;
            } else if (conversionUnitLiter === 'cl') {
                conversion = conversion * 10;
            } else if (conversionUnitLiter === 'l') {
                conversion = conversion / 10;
            }
        } else if (unitLiter === 'l') {
            if (conversionUnitLiter === 'ml') {
                conversion = conversion * 1000;
            } else if (conversionUnitLiter === 'cl') {
                conversion = conversion * 100;
            } else if (conversionUnitLiter === 'dl') {
                conversion = conversion * 10;
            }
        }
        setResultLiter(conversion);
    };

    //Updates as soon as the output value of the select is changed
    const handleChangeConversionUnitMeter = (e) => {
        setConversionUnitMeter(e.target.value);
    };

    const handleChangeConversionUnitLiter = (e) => {
        setConversionUnitLiter(e.target.value);
    };

    // updates each time the input is modified
    const handleChangeValueMeter = (e) => {
        setValueMeter(e.target.value);
    };

    const handleChangeValueLiter = (e) => {
        setValueLiter(e.target.value);
    };

    const handleReset = () => {
        setValueMeter('');
        setValueLiter('')
        setResultMeter('');
        setResultLiter('');
    };

    return (
        <>
            {unitMeter &&
                <>
                    <div className='meter'>
                        <p className='object'>Conversion de mesure : </p>
                        <div className='enterValueMeter'>
                            <p>Valeur à convertir : </p>
                            <input type="number" onChange={handleChangeValueMeter}/>
                            <select name="unitMeterSelect" id="unitMeterSelect" value={unitMeter}
                                    onChange={handleChangeUnitMeter}>
                                <option value="mm">mm</option>
                                <option value="cm">cm</option>
                                <option value="dm">dm</option>
                                <option value="m">m</option>
                            </select>
                        </div>

                        <div className='endingValueMeter'>
                            <p>Mesure souhaitée</p>
                            <select name="unitMeter" id="unitMeter" value={conversionUnitMeter}
                                    onChange={handleChangeConversionUnitMeter}>
                                <option value="mm">mm</option>
                                <option value="cm">cm</option>
                                <option value="dm">dm</option>
                                <option value="m">m</option>
                            </select>
                        </div>

                        <div>
                            <label>Résultat: </label>
                            <input type="number" value={resultMeter} disabled/>
                            <button onClick={handleConvertMeter}>Convertir</button>
                        </div>
                    </div>
                </>
            }

            {unitLiter &&
                <>
                    <div className='liter'>
                        <p className='object'>Conversion de volume : </p>
                        <div className='EnterValueLiter'>
                            <p>Valeur à convertir : </p>
                            <input type="number" onChange={handleChangeValueLiter}/>
                            <select name="unitLiterSelect" id="unitLiterSelect" value={unitLiter}
                                    onChange={handleChangeUnitLiter}>
                                <option value="ml">ml</option>
                                <option value="cl">cl</option>
                                <option value="dl">dl</option>
                                <option value="l">l</option>
                            </select>
                        </div>

                        <div className='endingValueLiter'>
                            <p>Volume souhaité : </p>

                            <select name="unitLiter" id="unitLiter" value={conversionUnitLiter}
                                    onChange={handleChangeConversionUnitLiter}>
                                <option value="ml">ml</option>
                                <option value="cl">cl</option>
                                <option value="dl">dl</option>
                                <option value="l">l</option>
                            </select>
                        </div>
                        <div>
                            <label>Résultat: </label>
                            <input type="number" value={resultLiter} disabled/>
                            <button onClick={handleConvertLiter}>Convertir</button>
                        </div>
                    </div>
                    <div className='reset'>
                        <button onClick={handleReset}>Reset</button>
                    </div>

                </>
            }
        </>
    );
}