#include <iostream>
#include <string>
#include <vector>
#include <fstream>
using namespace std;

int main()
{

	string usr_name;
	int num_tries=0;
	int num_right=0;
	double usr_score=0.0;
	bool go_for_it=true;
	bool got_it=false;
	bool next_seg=true;
	int cur_tuple=0; 
	const int max_seq=6;
	string seq_names[max_seq]={
		"Fibonacci",
		"Lucas",
		"Pell",
		"Triangular",
		"Square",
		"Pentagonal"
	};

	int elem_seq[]={
		1, 2, 3, 3, 4, 7, 2, 5,12,
		3, 6,10, 4, 9,16, 5,12,22
	};

	cout << "Please enter your name:  ";
	cin >> usr_name;

	ifstream infile("seq_data.txt");
	if (!infile)
	{
		/* code */
	}
	else
		{
			string name;
			int nt;
			int nc;
			while(infile >> name)
			{
				infile >> nt >> nc;
				if(name==usr_name)
				{
					cout << "Welcome back, "<< usr_name
					<< "\nYour current usr_score is"<< nc
					<< " out of " << nt << "\nGood Luck!\n";
					num_tries=nt;
					num_right=nc;
				} 
			}
		}



	while(next_seg==true&&cur_tuple<18)
	{
		//为用户显示数列
		cout << "The first two elements of the sequence are: "
		<< elem_seq[cur_tuple] <<"," << elem_seq[cur_tuple+1] << "\nWhat is the next element?\n";
		got_it=false;
		while((got_it==false)&&(go_for_it==true))
		{
			int usr_guess;
			cin >> usr_guess;
			num_tries++;
			if(usr_guess==elem_seq[cur_tuple+2])
				{
					cout << "Vert good! "
					<< elem_seq[cur_tuple+2]
					<< " is the next element in the "
					<< seq_names[cur_tuple/3]
					<< " sequence.\n";
					num_right++;
					got_it=true;
				}
			else{
					switch(num_tries)
					{
						case 1:
								cout << "Oops! Nice guess but not quite it.\n";
								break;
						case 2:
								cout << "Hmm. Sorry. Wrong a second time.\n";
								break;
						case 3: 
								cout << "Ah, this is harder than it looks, isn't it?\n";
								break;
						default:
								cout << "Fuck it off!!!\n";
								break;
					}
				cout << "Want to try again? Y/N?\n";
				char usr_rsp;
				cin >> usr_rsp;
				if (usr_rsp=='N'||usr_rsp=='n')
					go_for_it=false;
				}
		}
		cout << "Try another sequence? Y/N? \n";
		char try_again;
		cin >> try_again;
		if (try_again=='N'|| try_again=='n')
			next_seg=false;
		else cur_tuple+=3;
	}
	
	ofstream outfile("seq_data.txt",ios_base::app);
	if (!outfile)
		cerr <<"Unable to save session data!\n";
	else 
		outfile << usr_name  << ' '
				<< num_tries << ' '
				<< num_right << endl;
}