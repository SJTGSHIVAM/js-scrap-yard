tc2=[(2,6,'a'),
 (4,10, 'b'),
 (12,16, 'c'),
 (15,19,'d')]
tc1=[(1,3,'a'),
 (2,2.5, 'b'),
 (2.7,16, 'c'),
 (15,19,'d')]
def find_collision(tasks):
    colliding_tasks=set()
    last_time=tasks[0][1] #initial is set to first index this var is used to find collision
    final_list=[] # Final list of collisions
    temp_list=[] # used to remove single ton task 
    for task in tasks:
        if(task[0]<last_time):
            colliding_tasks.add(task)
        else:
            temp_list=list(colliding_tasks)
            final_list.append(colliding_tasks)
            colliding_tasks=set() #re initiate set in case of no subsequent collision
            colliding_tasks.add(task)
        # print(str(last_time)+" "+str(i[0])+" "+str(final_list)+" "+str(x)) # checking run state
        last_time=task[1] if last_time<task[1] else last_time #increase to the max time coverage
    temp_list=list(colliding_tasks)
    if(len(temp_list)>1):
        final_list.append(colliding_tasks)
    
    return final_list
print(find_collision(tc1))
print(find_collision(tc2))