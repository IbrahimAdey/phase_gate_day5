let hourly_rate = 0;
let pay_rate = 0;
let gross_pay = 0;
let net_pay = 0;
let state_tax = 0;
let federal_tax = 0;
let hours_worked = 0;

tasks = []

function add_task(description){
	tasks.append({"description": description, "completed": False});
};

funtion view_tasks(){
	for i, task in enumerate(tasks){
		status = 'x' if task["completed"] else ' ';
		print(f"{i + 1}. [(status)] (task['description'])");
}
};

funtion update_task(index){
	if 0 <= index < len(tasks){
		del tasks[index];
	}else{
		print("Invalid task number.");
}
};

funcion display_menu(){
	print("\nWelcome to Semicolon Employees payroll");
	print("1. Add employee payroll");
	print("2. View employee payroll");
	print("3. Update employee payroll");
	print("4. Exit");
};

function main(){
	while true {
		display_menu();
		choice = input("Enter your choice: ");

		if choice == "1":
			desc = input("Enter Employee name: ");
			desc = input("Enter number of hours worked: ");
			desc = input("Enter hourly rate: ");
			desc = input("Enter federal tax withholding rate: ");
			desc = input("Enter state tax withholding rate: ");
			add_task(desc);
			gross_pay = hours_worked * hourly_rate;
			federal_tax = gross_pay * 0.2;
			state_tax = gross_pay * 0.1;
			net_pay = gross_pay - (federal_tax + state_tax);
			print(net_pay);
		elif choice == "2":
			view_tasks();
		elif choice == "3":
			try:
				index = int(input("Enter task number to update: ")) - 1;
				mark_complete(index);
			except ValueError:
				print("Please enter a valid number.");
		elif choice == "4":
			print("Goodbye!");
			break;
		else:
			print("Invalid option. Try again.");
}
};