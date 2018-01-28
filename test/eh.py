"""
http://neuro.cs.ut.ee/demystifying-deep-reinforcement-learning/
"""
import gym
import numpy as np

env = gym.make('FrozenLake-v0')


BLOCK_COUNT = env.observation_space.n
DIRECTION_COUNT = env.action_space.n
Q = np.zeros([
    BLOCK_COUNT,
    DIRECTION_COUNT
])

lr = 0.8
y = 0.95
iterations = 2

rewards = []

for i in range(1, iterations):
    
    observation = env.reset()
    reward = 0
    done = False
    j = 0
    observation = 0
    while j < 100:
        j += 1;
        print('observation', observation)
        print(Q[observation,:])
        action = np.argmax(Q[observation,:] + np.random.randn(1, env.action_space.n) * (1.0 / i))
        s1, r, done, info = env.step(action)
        Q[observation, action] = Q[observation, action] + lr * (r + y * np.max(Q[s1,:]) - Q[observation, action])
        reward += r
        observation = s1
        if done:
            break
    rewards.append(reward);
    print("Score over time: " +  str(sum(rewards) / i))

