import React, { useState } from 'react';
import Select from 'react-select';
import { doesnt_matter } from '../config/searchConfigs';
import searchOptionsData from './SearchOptionsData.json';
import './SearchPage.css';
import makeAnimated from 'react-select/animated';


const SearchPage = () => {

    // destructure json data
    const {
        age,
        height,
        maritalStatus,
        religion,
        language,
        country
    } = searchOptionsData;

    // initial default data from json file.
    /**
    * Note - react-select package consume only arr of obj to render list of dropdown.
    *        - {"label": abc } label key is required in obj.
    */

    const animatedComponents = makeAnimated();

    const [minAgeVal, setMinAgeVal] = useState([age[10]]);
    const [maxAgeVal, setMaxAgeVal] = useState([age[15]]);
    const [minHeightVal, setMinHeightVal] = useState([height[7]]);
    const [maxHeightVal, setMaxHeightVal] = useState([height[12]]);
    const [maritalStatusVal, setMaritalStatusVal] = useState([doesnt_matter]);
    const [religionVal, setReligionVal] = useState([doesnt_matter]);
    const [languageVal, setLanguageVal] = useState([doesnt_matter]);
    const [countryVal, setCountryVal] = useState([doesnt_matter]);
    const [familyType, setFamilyType] = useState('');

    const [disabled,setDisabled] = useState(false)

    // style react-select
    const styles = {
        multiValue: styles => {
            return {
                ...styles,
                backgroundColor: 'white',
            }
        }
    }

    // handle change for multi select field (react-select pkg)
    const handleMultiSelectChange = (options, state, setState) => {
        // console.log(options,state)
        
        if(options.length === 0){
            setState([doesnt_matter])
            return
        }
        if (state[0].value === "Doesn't Matter") {
            setState(options.slice(1));
        } else {
            setState(options);
        }
    };

    // reset data
    const handleReset = () => {
        setMinAgeVal([age[10]]);
        setMaxAgeVal([age[15]]);
        setMinHeightVal([height[7]]);
        setMaxHeightVal([height[12]]);
        setMaritalStatusVal([doesnt_matter]);
        setReligionVal([doesnt_matter]);
        setLanguageVal([doesnt_matter]);
        setCountryVal([doesnt_matter]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const iterateValue = (state) => state.map(item => item.value);
        const postData = {
            minAge: minAgeVal[0].value,
            maxAge: maxAgeVal[0].value,
            minHeight: minHeightVal[0].value,
            maxHeight: maxHeightVal[0].value,
            maritalStatus: iterateValue(maritalStatusVal),
            religion: iterateValue(religionVal),
            language: iterateValue(languageVal),
            country: iterateValue(countryVal),
            familyType: familyType
        }

        console.log(postData);

        // TODO: get data
        /*
            try {
                axios.get(url, postData)
            } catch(e) {
                ...
            }        
        */
    }

    const [minAgeoptions,setminAgeoptions] = useState(age);

    function HandlesetMinAgeVal(ageObj){

        setMinAgeVal([ageObj])

        setMaxAgeVal([age[age.indexOf(ageObj) + 1]]) // setting the min age value in the select input

        setminAgeoptions(age.slice(age.indexOf(ageObj) + 1)) // triming the minAge options in the select input

        if(ageObj.value === age[age.length - 1].value)  setMaxAgeVal([ageObj])
        
    }

    return (
        <div className="search_conatiner">
            <div className="row search_conatiner_row ">
                {/* left/mb-bottom grid */}
                <div className="col-12 col-sm-9 order-1 ">
                    <form className='left_grid_row'>
                        {/* react-select fields */}
                        <div className='row'>
                            <span className='col-sm-4'>Age</span>
                            <span className='col-sm-8' >
                                <div className='row search_ageField'>
                                    <span className='col-5'>
                                        <Select
                                            className='select'
                                            options={age}
                                            value={minAgeVal}
                                            onChange={ageObj => HandlesetMinAgeVal(ageObj)}
                                        />
                                    </span>
                                    <span className='col-1 text-center p-0'> To </span>
                                    <span className='col-5'>
                                        <Select
                                            className='select'
                                            options={minAgeoptions}
                                            value={maxAgeVal}
                                            onChange={e => setMaxAgeVal([e])}
                                            isDisabled={disabled}
                                        />
                                    </span>
                                </div>
                            </span>
                        </div>
                        <div className='row'>
                            <span className='col-sm-4'>Height</span>
                            <span className='col-sm-8' >
                                <div className='row search_heightField'>
                                    <span className='col-5'>
                                        <Select
                                            className='select'
                                            options={height}
                                            value={minHeightVal}
                                            onChange={e => setMinHeightVal([e])}
                                        />
                                    </span>
                                    <span className='col-1 text-center p-0'> To </span>
                                    <span className='col-5'>
                                        <Select
                                            className='select'
                                            options={height.slice(minHeightVal[0].index + 1)}
                                            value={maxHeightVal}
                                            onChange={e => setMaxHeightVal([e])}
                                        />
                                    </span>
                                </div>
                            </span>
                        </div>
                        <div className='row'>
                            <span className='col-sm-4'>Maritial Status</span>
                            <span className='col-sm-8' >
                                <Select
                                    className='select'
                                    options={maritalStatus}
                                    isMulti
                                    components={animatedComponents}
                                    name="colors"
                                    styles={styles}
                                    closeMenuOnSelect={false}
                                    value={maritalStatusVal}
                                    onChange={e => handleMultiSelectChange(e, maritalStatusVal, setMaritalStatusVal)}
                                />
                            </span>
                        </div>
                        <div className='row'>
                            <span className='col-sm-4'>Religion</span>
                            <span className='col-sm-8' >
                                <Select
                                    className='select'
                                    options={religion}
                                    isMulti
                                    styles={styles}
                                    closeMenuOnSelect={false}
                                    value={religionVal}
                                    onChange={e => handleMultiSelectChange(e, religionVal, setReligionVal)}
                                />
                            </span>
                        </div>
                        <div className='row'>
                            <span className='col-sm-4'>Language</span>
                            <span className='col-sm-8' >
                                <Select
                                    className='select'
                                    options={language}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    styles={styles}
                                    value={languageVal}
                                    onChange={e => handleMultiSelectChange(e, languageVal, setLanguageVal)}
                                />
                            </span>
                        </div>
                        <div className='row'>
                            <span className='col-sm-4'>Country Living in</span>
                            <span className='col-sm-8' >
                                <Select
                                    className='select'
                                    options={country}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    styles={styles}
                                    value={countryVal}
                                    onChange={e => handleMultiSelectChange(e, countryVal, setCountryVal)}
                                />
                            </span>
                        </div>
                        <div className='row'>
                            <span className='col-sm-4'>Family Type</span>
                            <span className='col-sm-8 familyTypeRadio' >
                                <span>
                                    <input
                                        type='radio'
                                        name="familyType"
                                        value="joint"
                                        checked={familyType === "joint"}
                                        onChange={e => setFamilyType(e.target.value)}
                                    />
                                    <label>Joint</label>
                                </span>
                                <span>
                                    <input
                                        type='radio'
                                        name="familyType"
                                        value="nuclear"
                                        checked={familyType === "nuclear"}
                                        onChange={e => setFamilyType(e.target.value)}
                                    />
                                    <label>Nuclear</label>
                                </span>
                                <span>
                                    <input
                                        type='radio'
                                        name="familyType"
                                        value="single"
                                        checked={familyType === "single"}
                                        onChange={e => setFamilyType(e.target.value)}
                                    />
                                    <label>Single</label>
                                </span>
                            </span>
                        </div>

                        {/* search-reset btn */}
                        <div className='col-12 text-center searchResetBtn' >
                            <button onClick={handleSubmit}>
                                Search
                            </button>
                            <input
                                type="reset"
                                value="Reset"
                                onClick={handleReset}
                            />
                        </div>
                    </form>
                </div>

                {/* right/mb-top grid */}
                <div className="col-12 col-sm-3 order-sm-1">
                    <div className="row right_grid_row">
                        <div className="col-12 right_grid_col_1 ">
                            <label>My Saved Searches</label>
                            <input placeholder='ℹ️ You have no saved searches' />
                        </div>
                        <div className="col-12 right_grid_col_2">
                            <label>Profile ID Search</label>
                            <div>
                                <input type='text' placeholder='Enter Profile ID' />
                                <button>Go</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;