import { useContext } from "react";
import { DataContext } from "../context/DataContext"; // Import DataContextu
import PropTypes from "prop-types";
import styled from "styled-components";
import TypNemovitostiSelection from "./TypNemovitostiSelection";
import MapaCesko from "./MapaCesko";
import OkresSelection from "./OkresSelection";
import { PrimaryButton } from "../ui/Button"; // Použijeme PrimaryButton

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 100vh; /* Celková výška je 100% viewportu */
  margin-top: 4rem; /* Odsazení od horního okraje */
  margin-bottom: 4rem;
  gap: 0; /* Žádná mezera mezi prvky */
`;

function FormKrokJedna({ onNext }) {
  const { selectedTyp, selectedKraj, selectedOkres } = useContext(DataContext);

  function handleNext() {
    onNext({
      estateType: selectedTyp,
      region: selectedKraj?.name,
      district: selectedOkres?.name,
    });
  }

  return (
    <Container>
      <TypNemovitostiSelection />

      <MapaCesko />

      {selectedKraj && <OkresSelection />}

      {selectedTyp && selectedKraj && selectedOkres && (
        <PrimaryButton onClick={handleNext}>Pokračovat</PrimaryButton>
      )}
    </Container>
  );
}

FormKrokJedna.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default FormKrokJedna;
