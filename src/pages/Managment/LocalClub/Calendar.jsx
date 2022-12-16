import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import CustomTextField from "../../../components/Form/CustomTextField";
import CustomDatePicker from "../../../components/Form/CustomDatePicker";
import CustomTimePicker from "../../../components/Form/СustomTimePicker";

// import "@fullcalendar/core/main.css";
import "./styles.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import CustomModal from "../../../components/UI/CustomModal";

const Calendar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const matches = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    if (matches) {
      document.querySelector(".fc-header-toolbar").style.flexDirection = "row";
    } else {
      document.querySelector(".fc-header-toolbar").style.flexDirection =
        "column";
    }
  }, [matches]);

  const handleDateClick = (e) => {
    setDate(e);
    setOpenModal(true);
  };

  return (
    <Box>
      <Box className="demo-app-calendar w-full" id="mycalendartest">
        <FullCalendar
          selectable={true}
          defaultView="dayGridMonth"
          eventBackgroundColor="green"
          eventColor="white"
          dateClick={handleDateClick}
          editable={true}
          droppable={true}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, timeGridWeek, timeGridDay, listWeek",
          }}
          height={600}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: "event 1", date: "2019-04-01" },
            { title: "event 2", date: "2019-04-02" },
          ]}
        />
      </Box>

      {openModal ? (
        <CustomModal
          handleClose={() => setOpenModal(false)}
          title="Yeni bronlama"
        >
          <Formik
            initialValues={{
              id: uuidv4(),
              date: date,
              eventName: "",
              startTime: "",
              endTime: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <CustomTextField
                  name="date"
                  value={date.dateStr}
                  label="Eventin tarixi"
                />
                <CustomTextField name="eventName" label="Eventin adı" />
                <CustomTimePicker label="Başlanğıc saatı" name="startTime" />
                <CustomTimePicker label="Bitmə saatı" name="endTime" />
                <Box className="flex gap-x-2 my-3 justify-end">
                  <Button
                    onClick={() => setOpenModal(false)}
                    type="button"
                    variant="outlined"
                    color="error"
                  >
                    Ləğv et
                  </Button>
                  <Button type="submit" variant="contained" color="success">
                    Yarat
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CustomModal>
      ) : null}
    </Box>
  );
};

export default Calendar;
