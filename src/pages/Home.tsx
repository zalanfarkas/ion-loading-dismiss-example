import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [present, dismiss] = useIonLoading();

  // does NOT dismiss
  const plain = () => {
    present();
    dismiss();
  }

  // does NOT dismiss
  const withAwait = async () => {
    await present();
    await dismiss();
  }

  // DOES dismiss if timeout is 50 ms or more but not all the time
  const withTimeout = () => {
    present();
    setTimeout(() => dismiss(), 50);
  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={plain}>Plain</IonButton>
        <IonButton onClick={withAwait}>withAwait</IonButton>
        <IonButton onClick={withTimeout}>withTimeout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
