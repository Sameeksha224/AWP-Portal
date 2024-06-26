import React, {useEffect, useState} from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Axios from "axios";

// import moment from "moment";
// import Swal from 'sweetalert2'

// import dayjs, { Dayjs } from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import 'dayjs/locale/en-gb';

import Tooltip from "@mui/material/Tooltip";

import FormControl from "@mui/material/FormControl";
// import axios from "axios";
// import Radio from "@mui/material/Radio";

// import Apis from "Helper/Apis";
// import Spinner from "components/Spinner";
import {
  Button,
  FormControlLabel,
  RadioGroup,
  TextField,
  Select,
  MenuItem,
  InputLabel
} from "@mui/material";

import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from "@mui/material";
import { SmartButton } from "@mui/icons-material";

// import "../../components/Style.css";

const label_style = "block uppercase text-blueGray-600 text-xs font-bold mb-2";
const date_style = "block uppercase text-blueGray-600 text-xs font-bold mb-8";

const style_new_1 = "px-2 py-1 placeholder-blueGray-300 text-lightBlue-600  relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full";
const style_new_2 = "px-2 py-1 placeholder-blueGray-300 text-blueGray-600  relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full";

const form_style = "border-0 px-3 py-4 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150";
const boxy = "box-shadow: 5px 5px rgba(110, 8, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)";

const HorizontalRule = (top_margin) => {
  return (
    <hr className={`mt-${top_margin} border-b-1 border-blueGray-300`} />
  )
};

// const CustomTextField = ({ field_val, label_name, touched, errors, handleChange, handleBlur, width, disabled = false, projectDetails, setProjectDetails }) => {

//   return (

//     <div className={`w-full lg:w-${width}/12 px-4`}>
//       <div className="relative w-full mb-3">
//         <label
//            className={label_style}
//           className={label_style}
//          htmlFor="grid-password"
//         >
//           {label_name}
//         </label>
//         <FormControl fullWidth>
//           <TextField
//              className={style_new_2}
//              fullWidth
//              id={field_val}
//              name={field_val}
//              placeholder={label_name}
//              type={field_val}

//              value={projectDetails[field_val]}

//              onChange={(e) => {
//                setProjectDetails(prev => ({ ...prev, [field_val]: e.target.value }));
//              }}
//             onBlur={handleBlur}

//             disabled={disabled}


//            error={touched.area && Boolean(errors.area)}
//            helperText={touched.area && errors.area}
//           />
//         </FormControl>
//         {/* {errors[field_val] && touched[field_val] && !disabled && <p style={{ color: 'red' }} >{errors[field_val]}</p>} */}
//       </div>
//     </div>
//   )

// };

const customStyle = {
  padding: "8px",
  borderLeft: `1px solid black`,
  borderBottom: `1px solid black`,
  borderRight: `1px solid black`,
  borderTop: `1px solid black`,
  // backgroundColor: '#f0f6ff'
};

const AddProjectSimple = () => {
  const initialValues = {
    fin_year: '',
    survey_type: '',
    proc_type: '',
    basin_name: '',
    area: '',
    sig: '',
    objective: '',
    block: '',
    block_type: '',
    planned_volume: ''
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  // const [year, setYear] = React.useState();
  // const[survey_type, setSurveyType] = React.useState();

  // const handleChange=(e)=>{
  //   setYear(e.target.value);
  // }

  const [finYear, setFinYear] = React.useState([]);
  const [surveyTypes, setSurveyTypes] =  React.useState([]);
  const [processingTypes, setProcessingTypes] =  React.useState([]);
  const [basinNames, setBasinNames] =  React.useState([]);
  const [blocks, setBlocks] =  React.useState([]);
  const [blockTypes, setBlockTypes] =  React.useState([]);
  const [isLoading, setIsLoading] = useState(true)
  React.useEffect(() => {
    const getData = async()=>{
      await Axios.get("http://127.0.0.1:8000/api/getSurveyType")
      .then((response) => {
        console.log(response);
        setSurveyTypes(response.data);
      });
      await  Axios.get("http://127.0.0.1:8000/api/getFinancialYear")
      .then((response) => {
        console.log(response);
        setFinYear(response.data);
      });

      await  Axios.get("http://127.0.0.1:8000/api/getFinancialYear")
      .then((response) => {
        console.log(response);
        setFinYear(response.data);
      });

      await  Axios.get("http://127.0.0.1:8000/api/getProcessingType")
      .then((response) => {
        console.log(response);
        setProcessingTypes(response.data);
      });

      await  Axios.get("http://127.0.0.1:8000/api/getBasinNames")
      .then((response) => {
        console.log(response);
        setBasinNames(response.data);
      });

      await  Axios.get("http://127.0.0.1:8000/api/getBlockNames")
      .then((response) => {
        console.log(response);
        setBlocks(response.data);
      });

      await  Axios.get("http://127.0.0.1:8000/api/getBlockTypes")
      .then((response) => {
        console.log(response);
        setBlockTypes(response.data);
      });
      setIsLoading(false)
    }
    getData();
  }, []);


  
 

  // const finYearArray = ["1","2","3"];
  // const surveyTypeArray = ["4","5","6"];
  // const processingTypeArray =["4","5","6"];
  // const basinNameArray =["4","5","6"];
  // const blockArray = ["4","5","6"];
  // const blockTypeArray = ["4","5","6"];
  
  
  return (
    //  !isLoading &&
     isLoading? <></> : 
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      // validationSchema={validationSchema1}
      onSubmit={handleFormSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        handleReset,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        touched,
        values,
      }) => (
        <>
          <Form onSubmit={handleSubmit}>
            <div className="relative bg-blueGray-200">
              <div className="relative bg-lightBlue-600 md:pt-32 pb-4 pt-4"></div>
              <div className="px-4 md:px-10 mx-auto w-full -m-24 ">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                  <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                      <h6 className="text-blueGray-700 text-xl font-bold">
                        Project Details
                      </h6>
                    </div>
                  </div>

                  <div className="overflow-y-auto">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
                      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        header 1
                      </h6>
                      
                      <div className="grid grid-cols-1 gap-4">

                        {/* Input fields in a single row */}
                        <div className="flex flex-wrap">

                          {/* First input field */}
                          <div className="relative w-full mb-3">
                            <label className={label_style}>FINANCIAL YEAR</label>
                            {/* <FormControl fullWidth> */}
                              {/* <TextField
                                // fullWidth
                                id="fin_year"
                                name="fin_year"
                                placeholder="FIN YEAR"
                                className="single"
                                size="small"
                                value={values.fin_year}
                                onChange={handleChange}
                              /> */}
                            {/* </FormControl> */}
                            <FormControl fullWidth>
                              {/* select is for drop-down menu */}
                              <Select
                                value={values.fin_year}
                                onChange={handleChange}
                                id="fin_year"
                                name="fin_year"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size="small"
                                className="single"
                              >
                                
                                <MenuItem value="">
                                </MenuItem>
                                {finYear.map((val) => (
                                  <MenuItem key={val.id} value={val.id}>{val.fin_year}</MenuItem>
                                ))}

                              </Select>
                            </FormControl>
                          </div>

                          {/* Second input field */}
                          
                          <div className="relative w-full mb-3">
                            <label className={label_style}>SURVEY TYPE</label>
                            <FormControl fullWidth>
                              {/* <TextField
                                // fullWidth
                                id="survey_type"
                                name="survey_type"
                                className="single"
                                placeholder="SURVEY TYPE"
                                size="small"
                                value={values.survey_type}
                                onChange={handleChange}
                              /> */}
                              <Select
                                id="survey_type"
                                name="survey_type"
                                value={values.survey_type}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size="small"
                                className="single"
                              >
                                <MenuItem value="">
                                </MenuItem>
                                {/* <em>SURVEY TYPE</em> */}
                                {surveyTypes.map((val) => (
                                  <MenuItem key={val.id} value={val.id}>{val.survey_type}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                         

                          {/* Third input field */}
                          <div className="relative w-full mb-3">
                            <label className={label_style}>PROCESSING TYPE</label>
                            <FormControl fullWidth>
                              {/* <TextField
                                // fullWidth
                                id="proc_type"
                                name="proc_type"
                                className="single"
                                placeholder="PROCESSING TYPE"
                                size="small"
                                value={values.proc_type}
                                onChange={handleChange}
                              /> */}
                              <Select
                                value={values.proc_type}
                                onChange={handleChange}
                                id="proc_type"
                                name="proc_type"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size="small"
                                className="single"
                              >
                                <MenuItem value="">
                                </MenuItem>
                                {/* <em>PROCESSING TYPE</em> */}
                                {processingTypes.map((val) => (
                                  <MenuItem key={val.id} value={val.id}>{val.proc_type}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <br/>
                      <div className="second_row">
                        {/* first input field */}
                        <div className="relative w-full mb-3">
                        <div className= "second_row_element_one">
                              <label className={label_style}>BASIN NAME</label>
                              <FormControl fullWidth>
                                <Select
                                value={values.basin_name}
                                onChange={handleChange}
                                id="basin_name"
                                name="basin_name"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size="small"
                                className="single"
                              >
                                <MenuItem value="">
                                </MenuItem>
                                {/* <em>BASIN NAME</em> */}
                                {basinNames.map((val) => (
                                  <MenuItem key={val.id} value={val.id}>{val.basin_name}</MenuItem>
                                ))}
                              </Select>
                              </FormControl>
                            </div>
                            </div>
                            {/* second input field */}
                            <div className="relative w-full mb-3">
                            <div className= "second_row_element_two">
                              <label className={label_style}>AREA</label>
                              <FormControl fullWidth>
                                <TextField
                                  // fullWidth
                                  id="area"
                                  name="area"
                                  className="double"
                                  placeholder="AREA"
                                  size="small"
                                  value={values.area}
                                  onChange={handleChange}
                                />
                                
                              </FormControl>
                            </div>
                            </div>
                      </div>
                      <br/>
                      <br/>
                      <div className="second_row">
                        {/* first input field */}
                        <div className="relative w-full mb-3">
                        <div className= "second_row_element_one">
                              <label className={label_style}>INVESTIGATION NUMBER</label>
                              <FormControl fullWidth>
                                <TextField
                                  // fullWidth
                                  id="sig"
                                  name="sig"
                                  className="single"
                                  placeholder="INVESTIGATION NUMBER"
                                  size="small"
                                  value={values.sig}
                                  onChange={handleChange}
                                />
                              </FormControl>
                            </div>
                            </div>
                            {/* second input field */}
                            <div className="relative w-full mb-3">
                            <div className= "second_row_element_two">
                              <label className={label_style}>OBJECTIVE</label>
                              <FormControl fullWidth>
                                <TextField
                                  // fullWidth
                                  id="obj"
                                  name="obj"
                                  className="double"
                                  placeholder="OBJECTIVE"
                                  size="small"
                                  value={values.obj}
                                  onChange={handleChange}
                                />
                              </FormControl>
                            </div>
                            </div>
                      </div>
                      <br/>
                      <br/>
                      <div className="flex flex-wrap">

                          {/* First input field */}
                          <div className="relative w-full mb-3">
                            <label className={label_style}>BLOCK</label>
                            <FormControl fullWidth>
                              {/* <TextField
                                // fullWidth
                                id="block"
                                name="block"
                                placeholder="BLOCK"
                                className="single"
                                size="small"
                                value={values.block}
                                onChange={handleChange}
                              /> */}
                              <Select
                                value={values.block}
                                onChange={handleChange}
                                id="block"
                                name="block"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size="small"
                                className="single"
                              >
                                <MenuItem value="">
                                </MenuItem>
                                {/* <em>BLOCK</em> */}
                                {blocks.map((val) => (
                                  <MenuItem key={val.id} value={val.id}>{val.block}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>

                          {/* Second input field */}
                          
                          <div className="relative w-full mb-3">
                            <label className={label_style}>BLOCK TYPE</label>
                            <FormControl fullWidth>
                              {/* <TextField
                                // fullWidth
                                id="block_type"
                                name="block_type"
                                className="single"
                                placeholder="BLOCK TYPE"
                                size="small"
                                value={values.block_type}
                                onChange={handleChange}
                              /> */}
                              <Select
                                value={values.block_type}
                                onChange={handleChange}
                                id="block_type"
                                name="block_type"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size="small"
                                className="single"
                              >
                                <MenuItem value="">
                                </MenuItem>
                                {/* <em>BLOCK TYPE</em> */}
                                {blockTypes.map((val) => (
                                  <MenuItem key={val.id} value={val.id}>{val.block_type}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                         

                          {/* Third input field */}
                          <div className="relative w-full mb-3">
                            <label className={label_style}>PLANNED VOLUME</label>
                            <FormControl fullWidth>
                              <TextField
                                // fullWidth
                                id="planned_volume"
                                name="planned_volume"
                                className="single"
                                placeholder="PLANNED VOLUME"
                                size="small"
                                value={values.planned_volume}
                                onChange={handleChange}
                              />
                            </FormControl>
                          </div>
                        </div>

                      <HorizontalRule top_margin={24} />

                      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        SIG Details
                      </h6>

                      <div className="flex flex-wrap myshadow">
                        {/* Additional fields go here */}
                      </div>

                      <div className="flex flex-wrap">
                        <div className="w-full mt-12 lg:w-6/12 xl:w-3/12 px-4 py-100">
                          <Button
                            color="primary"
                            variant="contained"
                            fullWidth
                            type="submit"
                          // disabled={isSubmitting}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AddProjectSimple;



