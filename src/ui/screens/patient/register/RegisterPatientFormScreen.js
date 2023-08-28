import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { CheckBox } from '@react-native-community/checkbox';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './RegisterPatientFormScreen.style'

const RegisterPatientFormScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({ /* initial form data */ });
  const [dispneia, setDispneia] = useState(false);
  const [doencaDoPulmao, setDoencaDoPulmao] = useState(false);
  const [asma, setAsma] = useState(false);
  const [tuberculose, setTuberculose] = useState(false);
  const [bronquite, setBronquite] = useState(false);
  const [doencaDeEstomago, setDoencaDeEstomago] = useState(false);
  const [doencaDeFigado, setDoencaDeFigado] = useState(false);
  const [doresNosRins, setDoresNosRins] = useState(false);
  const [cefaleias, setCefaleias] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [alergias, setAlergias] = useState(false);
  const [doencasDoCoracao, setDoencasDoCoracao] = useState(false);
  const [palpitacao, setPalpitacao] = useState(false);
  const [infarto, setInfarto] = useState(false);
  const [hipertensaoArterial, setHipertensaoArterial] = useState(false);
  const [hernia, setHernia] = useState(false);
  const [outras, setOutras] = useState(false);
  const [diabetesFamiliares, setDiabetesFamiliares] = useState(false);
  const [doencasDoCoracaoFamiliares, setDoencasDoCoracaoFamiliares] = useState(false);
  const [hipertensaoArterialFamiliares, setHipertensaoArterialFamiliares] = useState(false);
  const [cancerFamiliares, setCancerFamiliares] = useState(false);
  const [depressaoFamiliares, setDepressaoFamiliares] = useState(false);
  const [surdezFamiliares, setSurdezFamiliares] = useState(false);
  const [alcoolismoFamiliares, setAlcoolismoFamiliares] = useState(false);
  const [tuberculosePulmonarFamiliares, setTuberculosePulmonarFamiliares] = useState(false);
  const [asmaFamiliares, setAsmaFamiliares] = useState(false);
  const [alergiaFamiliares, setAlergiaFamiliares] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const formDataWithCheckboxes = {
        ...formData,
        dispneia: dispneia,
        doencaDoPulmao: doencaDoPulmao,
        asma: asma,
        tuberculose: tuberculose,
        bronquite: bronquite,
        doencaDeEstomago: doencaDeEstomago,
        doencaDeFigado: doencaDeFigado,
        doresNosRins: doresNosRins,
        cefaleias: cefaleias,
        diabetes: diabetes,
        alergias: alergias,
        doencasDoCoracao: doencasDoCoracao,
        palpitacao: palpitacao,
        infarto: infarto,
        hipertensaoArterial: hipertensaoArterial,
        hernia: hernia,
        outras: outras,
        diabetesFamiliares: diabetesFamiliares,
        doencasDoCoracaoFamiliares: doencasDoCoracaoFamiliares,
        hipertensaoArterialFamiliares: hipertensaoArterialFamiliares,
        cancerFamiliares: cancerFamiliares,
        depressaoFamiliares: depressaoFamiliares,
        surdezFamiliares: surdezFamiliares,
        alcoolismoFamiliares: alcoolismoFamiliares,
        tuberculosePulmonarFamiliares: tuberculosePulmonarFamiliares,
        asmaFamiliares: asmaFamiliares,
        alergiaFamiliares: alergiaFamiliares,
      };

      const savedData = await AsyncStorage.getItem('cadastros');
      const cadastros = savedData ? JSON.parse(savedData) : [];
      cadastros.push(formDataWithCheckboxes);
      await AsyncStorage.setItem('cadastros', JSON.stringify(cadastros));

      setFormData({});
      setDispneia(false);
      setDispneia(false);
      setDoencaDoPulmao(false);
      setAsma(false);
      setTuberculose(false);
      setBronquite(false);
      setDoencaDeEstomago(false);
      setDoencaDeFigado(false);
      setDoresNosRins(false);
      setCefaleias(false);
      setDiabetes(false);
      setAlergias(false);
      setDoencasDoCoracao(false);
      setPalpitacao(false);
      setInfarto(false);
      setHipertensaoArterial(false);
      setHernia(false);
      setOutras(false);
      setDiabetesFamiliares(false);
      setDoencasDoCoracaoFamiliares(false);
      setHipertensaoArterialFamiliares(false);
      setCancerFamiliares(false);
      setDepressaoFamiliares(false);
      setSurdezFamiliares(false);
      setAlcoolismoFamiliares(false);
      setTuberculosePulmonarFamiliares(false);
      setAsmaFamiliares(false);
      setAlergiaFamiliares(false);

      navigation.navigate('Home');
    } catch (error) {
      console.error("Error during form submission:", error);
      // Toast.show({
      //   type: 'error',
      //   text1: 'Ocorreu um erro ao cadastrar',
      //   visibilityTime: 2000,
      //   autoHide: true,
      // });
    }
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>1. DADOS PESSOAIS</Text>
      <Input
        style={styles.input}
        label="Nome"
        onChangeText={(value) => handleInputChange('nome', value)}
        value={formData.nome} />
      <Input
        style={styles.input}
        label="Rg"
        onChangeText={(value) => handleInputChange('rg', value)}
        value={formData.rg} />
      <Input
        style={styles.input}
        label="Orgão Exp."
        value={formData.orgaoExp}
        onChangeText={(value) => handleInputChange('orgaoExp', value)} />
      <Input
        style={styles.input}
        label="CPF"
        value={formData.cpf}
        onChangeText={(value) => handleInputChange('cpf', value)} />
      <Input
        style={styles.input}
        label="Estado Civil"
        value={formData.estadoCivil}
        onChangeText={(value) => handleInputChange('estadoCivil', value)} />
      <Input
        style={styles.input}
        label="Sexo"
        value={formData.sexo}
        onChangeText={(value) => handleInputChange('sexo', value)} />
      <Input
        style={styles.input}
        label="Cor"
        value={formData.cor}
        onChangeText={(value) => handleInputChange('cor', value)} />
      <Input
        style={styles.input}
        label="Data de Nascimento"
        value={formData.dataDeNascimento}
        onChangeText={(value) => handleInputChange('dataDeNascimento', value)} />
      <Input
        style={styles.input}
        label="Nacionalidade"
        value={formData.nacionalidade}
        onChangeText={(value) => handleInputChange('nacionalidade', value)} />
      <Input
        style={styles.input}
        label="Naturalidade"
        value={formData.naturalidade}
        onChangeText={(value) => handleInputChange('naturalidade', value)} />
      <Input
        style={styles.input}
        label="Estado"
        value={formData.estado}
        onChangeText={(value) => handleInputChange('estado', value)} />
      <Input
        style={styles.input}
        label="Profissão/Ocupação"
        value={formData.profissao}
        onChangeText={(value) => handleInputChange('profissao', value)} />
      <Input
        style={styles.input}
        label="Grau de instrução"
        value={formData.grauDeInstrucao}
        onChangeText={(value) => handleInputChange('grauDeInstrucao', value)} />
      <Input
        style={styles.input}
        label="Logradouro"
        value={formData.logradouro}
        onChangeText={(value) => handleInputChange('logradouro', value)} />
      <Input
        style={styles.input}
        label="Número"
        value={formData.numero}
        onChangeText={(value) => handleInputChange('numero', value)} />
      <Input
        style={styles.input}
        label="Bairro"
        value={formData.bairro}
        onChangeText={(value) => handleInputChange('bairro', value)} />
      <Input
        style={styles.input}
        label="Cidade"
        value={formData.cidade}
        onChangeText={(value) => handleInputChange('cidade', value)} />
      <Input
        style={styles.input}
        label="Estado"
        value={formData.estadoCidade}
        onChangeText={(value) => handleInputChange('estadoCidade', value)} />
      <Input
        style={styles.input}
        label="E-mail"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)} />
      <Input
        style={styles.input}
        label="DDD"
        value={formData.ddd}
        onChangeText={(value) => handleInputChange('ddd', value)} />
      <Input
        style={styles.input}
        label="Fone"
        value={formData.fone}
        onChangeText={(value) => handleInputChange('Fone', value)} />
      <View style={styles.space} />
      <Text style={styles.heading}>2. ANAMNESE - SOFREU OU SOFRE DAS DOENÇAS ABAIXO </Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={dispneia}
          onValueChange={(value) => setDispneia(value)} />
        <Text>Dispineia (falta de ar)</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={doencaDoPulmao}
          onValueChange={(value) => setDoencaDoPulmao(value)} />
        <Text>Doença do pulmão</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={asma}
          onValueChange={(value) => setAsma(value)} />
        <Text>Asma</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={tuberculose}
          onValueChange={(value) => setTuberculose(value)} />
        <Text>Tuberculos</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={bronquite}
          onValueChange={(value) => setBronquite(value)} />
        <Text>Bronquite</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={doencaDeEstomago}
          onValueChange={(value) => setDoencaDeEstomago(value)} />
        <Text>Doença do estômago</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={doencaDeFigado}
          onValueChange={(value) => setDoencaDeFigado(value)} />
        <Text>Doença do fígado</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={doresNosRins}
          onValueChange={(value) => setDoresNosRins(value)} />
        <Text>Dores nos rins</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={cefaleias}
          onValueChange={(value) => setCefaleias(value)} />
        <Text>Cefaleias</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}

          value={diabetes}
          onValueChange={(value) => setDiabetes(value)} />
        <Text>Diabetes</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}

          value={alergias}
          onValueChange={(value) => setAlergias(value)} />
        <Text>Alergias</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={doencasDoCoracao}
          onValueChange={(value) => setDoencasDoCoracao(value)} />
        <Text>Doenças do Coração</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={palpitacao}
          onValueChange={(value) => setPalpitacao(value)} />
        <Text>Palpitação</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}

          value={infarto}
          onValueChange={(value) => setInfarto(value)} />
        <Text>Infarto</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={hipertensaoArterial}
          onValueChange={(value) => setHipertensaoArterial(value)} />
        <Text>Hipertenção arterial</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={hernia}
          onValueChange={(value) => setHernia(value)} />
        <Text>Hérnia</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={outras}
          onValueChange={(value) => setOutras(value)} />
        <Text>Outras</Text>
      </View>
      <View style={styles.space} />
      <Text style={styles.heading}>3. ANTECEDENTES FAMILIARES</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={diabetesFamiliares}
          onValueChange={(value) => setDiabetesFamiliares(value)} />
        <Text>Diabetess</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={doencasDoCoracaoFamiliares}
          onValueChange={(value) => setDoencasDoCoracaoFamiliares(value)} />
        <Text>Doenças do coração</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={hipertensaoArterialFamiliares}
          onValueChange={(value) => setHipertensaoArterialFamiliares(value)} />
        <Text>Hipertenção arterial</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={cancerFamiliares}
          onValueChange={(value) => setCancerFamiliares(value)} />
        <Text>Câncer</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={depressaoFamiliares}
          onValueChange={(value) => setDepressaoFamiliares(value)} />
        <Text>Depressão</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={surdezFamiliares}
          onValueChange={(value) => setSurdezFamiliares(value)} />
        <Text>Surdez</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={alcoolismoFamiliares}
          onValueChange={(value) => setAlcoolismoFamiliares(value)} />
        <Text>Alcoolismo</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={tuberculosePulmonarFamiliares}
          onValueChange={(value) => setTuberculosePulmonarFamiliares(value)} />
        <Text>Tuberculose</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={asmaFamiliares}
          onValueChange={(value) => setAsmaFamiliares(value)} />
        <Text>Asma</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={alergiaFamiliares}
          onValueChange={(value) => setAlergiaFamiliares(value)} />
        <Text>Alergia</Text>
      </View>
      <Button title="Cadastrar" onPress={handleFormSubmit} />
    </ScrollView>
  );
};


export default RegisterPatientFormScreen;
