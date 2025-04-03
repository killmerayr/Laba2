#include <iostream>
#include <cstring>
using namespace std;


bool towers(string str, int x){
	int n = str.length();
	int i = 0;
	bool cover[n];
	for (i = 0; i < n; i ++){
		if (str[i] == '1') cover[i] = true;
		else cover[i] = false;
	}
	for (i = 0; i < n; i++){
		if ( cover[i] == 1 ){
			for (int k = 0; k <= x; k++){
				cover[i + k] = true;
				cover[i - k] = true;
			}
		}
	}
	for (i = 0; i < n; i ++){
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
	