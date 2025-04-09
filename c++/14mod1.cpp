#include <iostream>
#include <cstring>
using namespace std;

bool towers(string str, int x){ // Функция для проверки покрытия
	int n = str.length();
	int i = 0;
	bool cover[n]; // Массив, изначально со значениями false
	for (i = 0; i < n; i ++){
		if (str[i] == '1') cover[i] = true;
		else cover[i] = false;
	}
	for (i = 0; i < n; i++){
		if ( cover[i] == 1 ){
			for (int k = 0; k <= x; k++){
				cover[i + k] = true; // Покрытие вправо
				cover[i - k] = true; // Покрытие влево 
			}
		}
	}
	for (i = 0; i < n; i ++){ // Проверка покрытия
		if (cover[i]) continue;
		else return false;
	}
	return true;
}

int main(){
	string s;
	int x;
	cout << "Введите вышки" << endl;
	cin >> s;
	cout << "Введите показатель x" << endl;
	cin >> x;
	if (towers(s, x)) cout << "Yes";
	else cout << "No";
	return 0;
}
	