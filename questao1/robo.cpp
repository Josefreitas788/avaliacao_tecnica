#include<iostream>
#include<string>
using namespace std;

class Robo {
    private:
        int posicaoX = 0;
        int posicaoY = 0;
        int xTamAmbiente;
        int yTamAmbiente;
    public:
        char direcao = 'N';


        void setPosicaoX(int x){
            if(this-> posicaoX < this->xTamAmbiente){
                this-> posicaoX += x;
            }
        }

        int getPosicaoX(){
            return this-> posicaoX;
        }

        void setPosicaoY(int y){
            if(this-> posicaoY < this->yTamAmbiente){
                this-> posicaoY += y;
            }
        }

        int getPosicaoY(){
            return this-> posicaoY;
        }

        void andar(char FrenteTras) {
          if (FrenteTras == 'F') {
            if (direcao == 'N') {
              setPosicaoY(1);
            } else if (direcao == 'S') {
              setPosicaoY(-1);
            } else if (direcao == 'L') {
              setPosicaoX(1);
            } else if (direcao == 'O') {
              setPosicaoX(-1);
            }
          } else if (FrenteTras == 'T') {
            if (direcao == 'N') {
                setPosicaoY(-1);
            } else if (direcao == 'S') {
                setPosicaoY(1);
            } else if (direcao == 'L') {
                setPosicaoX(-1);
            } else if (direcao == 'O') {
                setPosicaoX(1);
            }
          }
        }

        void virar(char EsquerdaDireita) {
          if (EsquerdaDireita == 'E') {
            if (direcao == 'N') {
                direcao = 'O';
            } else if (direcao == 'S') {
                direcao = 'L';
            } else if (direcao == 'L') {
                direcao = 'N';
            } else if (direcao == 'O') {
                direcao = 'S';
            }
          } else if (EsquerdaDireita == 'D') {
            if (direcao == 'N') {
                direcao = 'L';
            } else if (direcao == 'S') {
                direcao = 'O';
            } else if (direcao == 'L') {
                direcao = 'S';
            } else if (direcao == 'O') {
                direcao = 'N';
            }
          }
        }
        Robo(int xTamAmbiente, int yTamAmbiente) {
            this->xTamAmbiente = xTamAmbiente;
            this->yTamAmbiente = yTamAmbiente;
        }
};
int main(){
    int tamx,tamy;
    string passeio;
    cin >> tamx >> tamy;
    cin >> passeio;
    Robo *robo = new Robo(tamx,tamy);

    for(int i = 0; i < passeio.length(); i++){
        if(passeio[i] == 'F' || passeio[i] == 'T'){
            robo->andar(passeio[i]);
        }else{
            robo->virar(passeio[i]);
        }
    }
    cout << robo->direcao << " " << robo->getPosicaoX()<< " " <<robo->getPosicaoY() << '\n';

    return 0;
}
