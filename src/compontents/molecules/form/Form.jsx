import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import arrow from '../../../assets/arrow.png';
import { useState } from 'react';
import { dietsDetails } from '../../../data/data';
import FormFooter from '../../molecules/formFooter/FormFooter';

const Form = ({}) => {
  const [value, setValue] = useState(10);
  const [openFirstList, setOpenFirstList] = useState(false);
  const [openSecondList, setOpenSecondList] = useState(false);
  const [selectedDiet, setSelectedDiet] = useState('classic');
  const [selectKcal, setSelectKcal] = useState('1200');

  let dietName = selectedDiet;

  const toggleFirstList = () => {
    setOpenFirstList((prevState) => !prevState);
    setOpenSecondList(false);
  };
  const toggleSecondList = () => {
    setOpenSecondList((prevState) => !prevState);
  };

  const checkName = (e) => {
    setSelectedDiet(e.target.textContent);
    setOpenFirstList((prevState) => !prevState);
  };

  const currentDietArray = dietsDetails.filter((diet) => {
    return diet.name === dietName;
  });

  const checkKcal = (e) => {
    setSelectKcal(e.target.textContent);
    setOpenSecondList((prevState) => !prevState);
  };

  let findKcal;
  currentDietArray.map((item) => (findKcal = item.kcal));

  const test = findKcal.filter((kcal) => {
    if (kcal.kcal === selectKcal) {
      return kcal.pricePerDay;
    }
  });

  const allCost = test[0].pricePerDay * value;

  return (
    <>
      <div className={styles.formWrapper}>
        <h1 className={styles.formWrapper__tittle}>Cennik</h1>

        <div className={styles.formWrapper__dietsWrapper}>
          <p className={styles.formWrapper__dietsWrapper__diets}>dieta</p>
          <div className={styles.formWrapper__dietsWrapper__listWrapper}>
            <button className={styles.button} onClick={toggleFirstList}>
              <p className={styles.formWrapper__dietsWrapper__typeDiet}>{selectedDiet}</p>
              <img className={styles.arrow} src={arrow} alt="" />
            </button>
            {openFirstList && (
              <ul className={styles.formWrapper__dietsWrapper__listWrapper__list}>
                {dietsDetails.map((name, id) => (
                  <li
                    key={id}
                    onClick={checkName}
                    className={styles.formWrapper__dietsWrapper__listWrapper__list__item}
                  >
                    {name.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.formWrapper__kcalWrapper}>
          <p className={styles.formWrapper__kcalWrapper__kcal}>kaloryczność</p>

          {currentDietArray.map((item) => (
            <div key={item.id} className={styles.formWrapper__kcalWrapper__listWrapper}>
              <button className={styles.button} onClick={toggleSecondList}>
                <p className={styles.formWrapper__kcalWrapper__typeDiet}>{selectKcal} kcal</p>
                <img className={styles.arrow} src={arrow} alt="" />
              </button>
              {openSecondList && (
                <ul className={styles.formWrapper__dietsWrapper__listWrapper__list}>
                  {item.kcal.map((kcal) => (
                    <li
                      key={kcal.kcal}
                      onClick={checkKcal}
                      className={styles.formWrapper__dietsWrapper__listWrapper__list__item}
                    >
                      {kcal.kcal}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className={styles.formWrapper__dayWrapper}>
          <div className={styles.formWrapper__dayWrapper__countDay}>
            <p>{value} dni</p>
          </div>
          <div className={styles.formWrapper__dayWrapper__inputWrapper}>
            <label className={styles.formWrapper__dayWrapper__numDays}>ilość dni</label>
            <input
              className={styles.formWrapper__dayWrapper__input}
              type="range"
              min="1"
              max="90"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.formWrapper__info}>
          <div className={styles.formWrapper__info__details}>
            <p className={styles.formWrapper__info__details__dayCost}>koszt dzienny</p>
            <p className={styles.formWrapper__info__details__price}>{test[0].pricePerDay} zł</p>
          </div>
          <div className={styles.formWrapper__info__details}>
            <p className={styles.formWrapper__info__toSave}>oszczędzasz</p>
            <p className={styles.formWrapper__info__quantitySave}>84,00 zł</p>
          </div>
        </div>
      </div>
      <FormFooter allCost={allCost} />
    </>
  );
};

Form.propTypes = {};

export default Form;
